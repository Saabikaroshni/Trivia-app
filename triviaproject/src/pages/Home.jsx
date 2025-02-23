import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h2>Welcome to Trivia App</h2>
      <p>Test your knowledge with fun quizzes!</p>
      <Link to="" className="btn">Start Quiz</Link>
    </div>
  );
}

export default Home;