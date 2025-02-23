import React from "react";
import { Link } from "react-router-dom";
import '../css/Style.css'
function Navbar() {
  return (
    <nav className="navbar">
      <h1>Trivia App</h1>
      <ul>
        <li><Link to="/" className="link">Home</Link></li>
       
        <li><Link to="/leaderboard" className="link">Leaderboard</Link></li>
        <li><Link to="/signup" className="link">Signup</Link></li>
        <li><Link to="/login" className="link">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;