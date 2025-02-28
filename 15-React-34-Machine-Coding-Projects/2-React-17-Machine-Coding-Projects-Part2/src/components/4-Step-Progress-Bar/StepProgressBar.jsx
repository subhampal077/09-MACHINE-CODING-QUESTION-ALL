import React from "react";

const StepProgressBar = ({ steps, activeStep }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        marginInline: "auto",
        padding: "10px",
        marginBottom: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
      }}
    >
      {steps?.length > 0 &&
        steps.map((step, i) => (
          <div
            style={{
              flexGrow: "1",
              height: "100",
              padding: "10px",
              fontWeight: "bold",
              backgroundColor: `${i <= activeStep ? "red" : "cyan"}`,
            }}
            key={i}
          >
            {step}
          </div>
        ))}
    </div>
  );
};

export default StepProgressBar;
