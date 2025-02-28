import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1905", "1912", "1920", "1931"],
      correctAnswer: "1912",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Won", "Ringgit", "Baht"],
      correctAnswer: "Yen",
    },
    {
      question: "Which programming language is also a gem?",
      options: ["Ruby", "Python", "Java", "C++"],
      correctAnswer: "Ruby",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Southern Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Pablo Picasso",
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Claude Monet",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctAnswer: "Canberra",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

//   console.log(selectedOptions, currentQuestion, score);

  return (
    <div className="quiz">
      <h1>Quiz App</h1>
      {!showResult ? (
        <div>
          <h3>Question: {currentQuestion + 1}</h3>
          <h4>{questions[currentQuestion].question}</h4>
          <div
            className="options"
            style={{
              display: "inline-flex",
              gap: "12px",
            }}
          >
            {questions[currentQuestion].options.map((item, i) => (
              <button
                onClick={() => {
                  const updatedOption = [...selectedOptions];
                  updatedOption[currentQuestion] = item;
                //   console.log(updatedOption);

                  setSelectedOptions(updatedOption);
                }}
                key={i}
                style={{
                  backgroundColor:
                    selectedOptions[currentQuestion] === item ? "yellow" : "",
                }}
                className={`option`}
              >
                {item}
              </button>
            ))}
          </div>
          <br />
          <div
            className="button-container"
            style={{ marginTop: "20px", display: "inline-flex", gap: "12px" }}
          >
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              disabled={currentQuestion === 0}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (
                  selectedOptions[currentQuestion] ===
                  questions[currentQuestion].correctAnswer
                ) {
                  setScore(score + 1);
                }

                if (currentQuestion === questions.length - 1) {
                  setShowResult(true);
                } else {
                  setCurrentQuestion(currentQuestion + 1);
                  setShowResult(false);
                }
              }}
              disabled={currentQuestion === questions.length}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Quiz Completed</h3>
          <p>Your Score: {score}</p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setSelectedOptions(new Array(questions.length).fill(null));
              setShowResult(false);
            }}
            className="restart-button"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
