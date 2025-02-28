import React, { useEffect, useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState("");
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState();

  const fetchApi = async () => {
    const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurr}`);
    const result = await res.json();
    // console.log(result);

    setExchangeRate(result?.rates[toCurr]);

    setConvertedAmount((amount * result.rates[toCurr]).toFixed(2));
  };

  useEffect(() => {
    fetchApi();
  }, [fromCurr, toCurr, amount]);

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "lightcyan",
        padding: "20px",
        maxWidth: "480px",
        width: "100%",
        borderRadius: "16px",
        marginInline: "auto",
      }}
    >
      <h1>Currency Converter</h1>

      <div>
        <div>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            style={{ padding: "10px", borderRadius: "6px" }}
          />

          <select
            value={fromCurr}
            onChange={(e) => setFromCurr(e.target.value)}
            style={{ padding: "10px", borderRadius: "6px" }}
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
            <option value="RUB">RUB</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
          </select>
        </div>

        <p style={{ fontWeight: "bold", fontSize: "20px", margin: "8px" }}>
          To
        </p>

        <div>
          <input
            value={convertedAmount}
            type="number"
            readOnly
            style={{ padding: "10px", borderRadius: "6px" }}
          />

          <select
            value={toCurr}
            onChange={(e) => setToCurr(e.target.value)}
            style={{ padding: "10px", borderRadius: "6px" }}
          >
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="RUB">RUB</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
          </select>
        </div>
        <h3>
          Conversion Rate: 1 {fromCurr} = {exchangeRate} {toCurr}
        </h3>
      </div>
    </div>
  );
};

export default CurrencyConverter;
