import React, { useEffect, useState } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function fetchQuote() {
    setIsLoading(true);
    try {
      const res = await fetch("http://api.quotable.io/quotes/random");
      const result = await res.json();
      // console.log(result);
      setQuote(result[0]);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Random Quote Generator</h1>

      <div>
        {isLoading && <p>Loading...</p>}
        {errorMsg && <p>{errorMsg}</p>}
        {quote?.length > 0 && (
          <>
            <div>
              <p>{quote.content}</p>
              <p>{quote.author}</p>
              <p>{quote.dateAdded}</p>
              <p>{quote.dateModified}</p>
            </div>
            <button onClick={() => fetchQuote()}>Refresh</button>
          </>
        )}
      </div>
    </div>
  );
};

export default RandomQuote;
