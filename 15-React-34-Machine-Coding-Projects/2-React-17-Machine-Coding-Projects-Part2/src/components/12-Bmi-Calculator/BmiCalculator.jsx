import React, { useState } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  function calculateBmi() {
    if (weight > 0 && height > 0) {
      const generateBmi = ((weight / (height * height)) * 10000).toFixed(2);
      setBmi(generateBmi);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        marginBlock: "20px",
      }}
    >
      <h1>BodyMassIndex Calculator</h1>

      <div>
        <label>Weight (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div>
        <label>Height (cm): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <button onClick={calculateBmi}>Calculate BMI</button>

      {bmi && (
        <div>
          <p style={{ margin: "0" }}>BMI: {bmi} kg/m^2</p>

          <p style={{ margin: "10px" }}>
            {bmi < 18.5
              ? "Underweight"
              : bmi >= 18.5 && bmi <= 24.9
              ? "Normal Weight"
              : bmi >= 25 && bmi < 29.9
              ? "Overweight"
              : "Obese"}
          </p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
