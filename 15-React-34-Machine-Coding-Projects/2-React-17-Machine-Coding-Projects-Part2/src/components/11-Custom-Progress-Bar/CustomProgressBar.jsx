import React, { useState } from "react";

function CustomProgressBar() {
  const [width, setWidth] = useState(0);
  const [error, setError] = useState("");

  return (
    <div style={{ marginBlock: "20px" }}>
      <h1>Custom Progress Bar</h1>

      <div
        style={{
          backgroundColor: "lightgray",
          maxWidth: "320px",
          marginBlock: "16px",
          marginInline: "auto",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {width >= 0 && width <= 100 ? (
          <div
            style={{
              backgroundColor: "cyan",
              width: `${width}%`,
              height: "16px",
              transition: "all 500ms",
            }}
          >
            {width > 0 && `${width}`}
          </div>
        ) : (
          <p>{error}</p>
        )}
      </div>

      <div>
        <label>Input Percentage : </label>
        <input
          max={100}
          min={0}
          value={width}
          onChange={(e) => {
            setWidth(e.target.value);
            if (e.target.value > 100 || e.target.value < 0) {
              setError("Please Enter a value between 0 to 100");
            } else {
              setError("");
            }
          }}
          type="number"
        />
      </div>
    </div>
  );
}

export default CustomProgressBar;
