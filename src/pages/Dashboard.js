import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getSession, clearSession, getLogs, setLogs, getPoints, getBadges } from "../utils/storage";
import { addPoints, checkBadges } from "../utils/storage";

export default function Dashboard(){
  const nav = useNavigate();
  const [points,setP] = useState(0);
  const [badges,setB] = useState([]);

  useEffect(()=>{
    if(!getSession()) nav("/");
    refresh();
  },[]);

  function refresh(){
    setP(getPoints());
    setB(getBadges());
  }

  function logout(){
    clearSession();
    nav("/");
  }

  function logSleep(e){
    e.preventDefault();
    const f = e.target;
    const b = new Date(f.bedtime.value);
    const w = new Date(f.waketime.value);
    const q = parseInt(f.quality.value);
    const d = (w-b)/3600000;

    const logs = getLogs("sleep");
    logs.push({bedtime:b, waketime:w, quality:q, duration:d});
    setLogs("sleep", logs);

    addPoints(q*2);
    checkBadges("sleep", d, q);
    refresh();
    alert("Sleep logged!");
    f.reset();
  }

  function logFocus(e){
    e.preventDefault();
    const f = e.target;
    const s = new Date(f.starttime.value);
    const en = new Date(f.endtime.value);
    const p = parseInt(f.productivity.value);
    const env = f.environment.value;
    const d = (en-s)/3600000;

    const logs = getLogs("focus");
    logs.push({starttime:s, endtime:en, productivity:p, environment:env, duration:d});
    setLogs("focus", logs);

    addPoints(p*3);
    checkBadges("focus", d, p);
    refresh();
    alert("Focus logged!");
    f.reset();
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>

      <p>Points: {points}</p>
      <p>Badges: {badges.join(", ")}</p>

      <h2>Sleep</h2>
      <form onSubmit={logSleep}>
        <input type="datetime-local" name="bedtime" required/>
        <input type="datetime-local" name="waketime" required/>
        <input type="number" name="quality" min="1" max="10" required/>
        <button>Log Sleep</button>
      </form>

      <h2>Focus</h2>
      <form onSubmit={logFocus}>
        <input type="datetime-local" name="starttime" required/>
        <input type="datetime-local" name="endtime" required/>
        <input type="number" name="productivity" min="1" max="10" required/>
        <textarea name="environment" required/>
        <button>Log Focus</button>
      </form>

      <Link to="/insights">Go to Insights</Link>
    </div>
  );
}
