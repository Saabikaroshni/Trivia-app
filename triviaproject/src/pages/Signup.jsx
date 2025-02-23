import React from "react";

function Signup() {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" className="input" />
      <input type="email" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <button className="btn">Sign Up</button>
    </div>
  );
}

export default Signup;