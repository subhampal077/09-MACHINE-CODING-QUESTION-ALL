import React from "react";
import Countdown from "./Countdown";

const CountdownTest = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>CountDown Timer</h1>

      <Countdown initialTime={120} />
    </div>
  );
};

export default CountdownTest;
