import React, { useState } from "react";

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(10);
  const [totalPeople, setTotalPeople] = useState(1);
  const [calculateTip, setCalculateTip] = useState(0);
  const [error, setError] = useState("");

  function handleTip() {
    if (
      !billAmount ||
      billAmount <= 0 ||
      !tipPercentage ||
      tipPercentage <= 0
    ) {
      setError("Please enter valid Bill Amount & Tip Percentage");
      return;
    }

    const bill = parseFloat(billAmount);
    const tipAmount = (bill * tipPercentage) / 100;
    const totalAmount = bill + tipAmount;
    const tipAmountPerPerson = tipAmount / totalPeople;

    setCalculateTip({
      totalAmount,
      tipAmount,
      tipAmountPerPerson,
    });
  }

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center",
        marginBlock: "20px",
      }}
    >
      <h1>Tip Calculator</h1>

      <div>
        <label>Bill Amount: </label>
        <input
          value={billAmount}
          onChange={(e) => {
            setBillAmount(e.target.value);
            setError("");
          }}
          type="number"
        />
      </div>

      <div>
        <label>Tip Percentage: </label>
        <input
          value={tipPercentage}
          onChange={(e) => {
            setTipPercentage(e.target.value);
            setError("");
          }}
          type="number"
        />
      </div>

      <div>
        <label>Number of People: </label>
        <input
          value={totalPeople}
          onChange={(e) => setTotalPeople(e.target.value)}
          type="number"
        />
      </div>

      <button onClick={handleTip}>Calculate Tip</button>

      {calculateTip ? (
        <div>
          <p>Tip Amount : {calculateTip.tipAmount}</p>
          <p>Per Person Tip : {calculateTip.tipAmountPerPerson}</p>
          <p>Total Amount : {calculateTip.totalAmount}</p>
        </div>
      ) : null}

      {error && <p>{error}</p>}
    </div>
  );
};

export default TipCalculator;
