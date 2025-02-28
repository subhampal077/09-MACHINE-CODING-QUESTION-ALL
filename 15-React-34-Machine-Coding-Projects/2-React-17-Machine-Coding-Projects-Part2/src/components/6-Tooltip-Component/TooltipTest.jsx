import React from "react";
import Tooltip from "./Tooltip";

const TooltipTest = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Tooltip content={"Tooltip Content"} children={"Hover Me"} />
    </div>
  );
};

export default TooltipTest;
