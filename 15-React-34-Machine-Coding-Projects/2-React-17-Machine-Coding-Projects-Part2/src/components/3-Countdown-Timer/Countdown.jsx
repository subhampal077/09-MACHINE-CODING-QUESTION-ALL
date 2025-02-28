import React, { useEffect, useRef, useState } from "react";

const Countdown = ({ initialTime = 60 }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, time]);

  const minute = Math.floor(time / 60);
  const sec = time % 60;

  return (
    <div>
      <h2>
        {minute.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}
      </h2>
      <div>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(!isRunning)}>{isRunning? "Pause" : "Resume"}</button>
        <button
          onClick={() => {
            setTime(initialTime);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Countdown;
