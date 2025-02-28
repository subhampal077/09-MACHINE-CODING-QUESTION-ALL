// clientHeight = On Desktop: If the browser doesn't show a scrollbar and there’s no overflow content, clientHeight and 100vh will likely be very similar or the same

import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      setData(data.products);
    } catch (errorMsg) {
      setErrorMsg(errorMsg.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);

  function handleScrollPercentage() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // console.log(scrollTop, "---", scrollHeight, "---", clientHeight);

    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    // console.log(scrollPercent);

    setScrollPercentage(scrollPercent);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  //   console.log(scrollPercentage);
  return (
    <div className="text-center pt-[72px] pb-5">
      <h1 className="py-3 fixed top-0 w-full text-3xl font-bold bg-slate-300">
        Custom Scroll Indicator
        <span
          className="fixed h-[5px] top-[60px] left-0 bg-cyan-400"
          style={{ width: `${scrollPercentage}%` }}
        ></span>
      </h1>
      {loading && <p className="font-semibold my-4">Loading....</p>}
      {errorMsg && <p className="font-semibold my-4">Error: {errorMsg}</p>}
      {data?.length > 0 && (
        <div>
          {data.map((item, i) => (
            <p className="font-medium mt-2" key={i}>
              {item.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScrollIndicator;
