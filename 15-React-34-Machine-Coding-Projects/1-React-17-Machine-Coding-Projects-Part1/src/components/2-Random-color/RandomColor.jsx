// demo of colors

// rgb(256,256,256)
// #456789 range [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

import React, { useState } from "react";

const hexColor = () => {
  const [colorType, setColorType] = useState("HEX");
  const [color, setColor] = useState("#000000");

  function handleCreateRandomHexColor() {
    let hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexArr[Math.floor(Math.random() * hexArr.length)];
    }
    setColor(hexColor);
  }
  
  function handleCreateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  }

  return (
    <div
      className={`w-[100vw] h-[100vh] text-center flex flex-col`}
      style={{ backgroundColor: color }}
    >
      <div className="mx-auto inline-flex gap-2 p-5 text-sm ">
        <button
          onClick={() => {
            setColorType("HEX");
            setColor(handleCreateRandomHexColor);
          }}
          className="px-4 py-2 border-2 rounded bg-red-600"
        >
          Create HEX Color
        </button>

        <button
          onClick={() => {
            setColorType("RGB");
            setColor(handleCreateRandomRgbColor);
          }}
          className="px-4 py-2 border-2 rounded bg-red-600"
        >
          Create RGB Color
        </button>

        <button
          onClick={
            colorType === "HEX"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
          className="px-4 py-2 border-2 rounded bg-red-600"
        >
          Create Random Color
        </button>
      </div>
      <p className="text-4xl text-white font-semibold">
        {colorType === "HEX" ? "Hex Color" : "Rgb Color"}: {color}
      </p>
    </div>
  );
};

export default hexColor;
