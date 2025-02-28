import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Digital Clock</h1>
      <div>
        <div>
          <span>{time.getHours().toString().padStart(2, "0")}-</span>
          <span>{time.getMinutes().toString().padStart(2, "0")}-</span>
          <span>{time.getSeconds().toString().padStart(2, "0")}</span>
        </div>
        <div style={{ marginTop: "8px" }}>
          {time.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
