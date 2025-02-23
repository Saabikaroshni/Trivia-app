import React, { useState } from "react";

function Quiz() {
  const questions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"], answer: "Paris" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="container">
      {currentQuestion < questions.length ? (
        <>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)} className="btn">
              {option}
            </button>
          ))}
        </>
      ) : (
        <h2>Your Score: {score} / {questions.length}</h2>
      )}
    </div>
  );
}

export default Quiz;