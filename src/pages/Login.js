import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUsers, setSession } from "../utils/storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  function submit(e) {
    e.preventDefault();
    const users = getUsers();
    const u = users.find(x => x.email === email && x.password === password);
    if (!u) return alert("Invalid credentials");
    setSession(email);
    nav("/dashboard");
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" required />
        <button>Login</button>
      </form>
      <Link to="/register">Join the Fun Squad</Link>
    </div>
  );
}
