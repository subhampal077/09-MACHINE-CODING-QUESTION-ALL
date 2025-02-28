import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-24 h-24 border border-red-600 text-4xl text-center m-[-0.5px] float-left cursor-pointer"
    >
      {value}
    </button>
  );
};

export default Square;
