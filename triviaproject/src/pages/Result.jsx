import React from "react";
import { Link } from "react-router-dom";

function Result() {
  return (
    <div className="container">
      <h2>Quiz Completed!</h2>
      <p>Check the leaderboard to see where you stand.</p>
      <Link to="/leaderboard" className="btn">Leaderboard</Link>
    </div>
  );
}

export default Result;