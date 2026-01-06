import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, setUsers, setPoints, setBadges } from "../utils/storage";

export default function Register() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirm,setConfirm] = useState("");
  const nav = useNavigate();

  function submit(e){
    e.preventDefault();
    if(password !== confirm) return alert("Passwords do not match");

    const users = getUsers();
    if(users.find(u=>u.email===email)) return alert("User exists");

    users.push({email,password});
    setUsers(users);
    setPoints(0);
    setBadges([]);
    alert("Registered!");
    nav("/");
  }

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={submit}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" required />
        <input type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} placeholder="Confirm" required />
        <button>Register</button>
      </form>
    </div>
  );
}
