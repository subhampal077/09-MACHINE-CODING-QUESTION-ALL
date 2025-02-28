import React from "react";
import useWindowResize from "./UseWindowResize";

const UseWindowResizeTest = () => {
  const { width, height } = useWindowResize();

  return (
    <div className="text-center">
      <h1 className="m-4 text-3xl font-bold">Use WindowResize Hook</h1>
      <p className="mb-4 text-xl font-semibold">Width is: {width}</p>
      <p className="m-4 text-xl font-semibold">Height is: {height}</p>
    </div>
  );
};

export default UseWindowResizeTest;
