import React, { useState } from "react";

const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  let timeoutId;
  function handleShowTooltip() {
    timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }

  function handleHideTooltip() {
    setIsVisible(false);
    clearTimeout(timeoutId);
  }

  return (
    <div
      style={{
        textAlign: "center",
        fontWeight: "bold",
        position: "relative",
      }}
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
    >
      <p
        style={{
          backgroundColor: "cyan",
          padding: "10px",
          display: "inline-block",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {children}
      </p>

      {isVisible && (
        <p
          style={{
            position: "absolute",
            top: "-50px",
            left: "-50%",
            right: "-50%",
            backgroundColor: "cyan",
            padding: "10px",
            display: "inline-block",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {content}
        </p>
      )}
    </div>
  );
};

export default Tooltip;
