import React from "react";

function Login() {
  return (
    <div className="container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <button className="btn">Login</button>
    </div>
  );
}

export default Login;