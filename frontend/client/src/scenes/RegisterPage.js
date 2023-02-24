import React, { useState } from "react";
const api_base = "http://localhost:8000";

async function loginUser(credentials) {
  return fetch(api_base, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      name,
      password,
      email
    });
    setToken(token);
  };

  return (
    <div className="register-form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input className="auth-form-container" type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <p>Email</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input className = "checkbox"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
        <a href="/todos" className = "button">Sign In</a>
        </div>
      </form>
    </div>
  );
}
