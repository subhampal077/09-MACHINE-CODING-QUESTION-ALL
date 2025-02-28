import React, { useState } from "react";
import StepProgressBar from "./StepProgressBar";

const StepProgressTest = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Step Progress Bar</h1>

      <StepProgressBar steps={steps} activeStep={activeStep} />

      <div>
        <button
          disabled={activeStep === 0}
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Prev Step
        </button>

        <button
          disabled={activeStep === steps.length - 1}
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default StepProgressTest;
