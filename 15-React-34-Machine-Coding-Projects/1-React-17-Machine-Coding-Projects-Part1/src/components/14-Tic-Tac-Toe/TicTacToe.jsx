// 012
// 345
// 678

import React, { useEffect, useState } from "react";
import Square from "./Square";

const TicTacToe = () => {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleClick(getCurrSquare) {
    let copySquare = [...square];

    if (getWinner(copySquare) || copySquare[getCurrSquare]) {
      return;
    } else {
      copySquare[getCurrSquare] = isXTurn ? "X" : "O";
    }

    setIsXTurn(!isXTurn);
    // console.log(copySquare);
    setSquare(copySquare);
  }

  function getWinner(square) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (square[x] === square[y] && square[x] === square[z]) {
        // console.log(square[x]);
        return square[x];
      }
    }
    return null;
  }

  function handleRestart() {
    setIsXTurn(true);
    setSquare(Array(9).fill(""));
  }

  useEffect(() => {
    if (!getWinner(square) && square.every((item) => item !== "")) {
      setStatus("This is a Draw");
    } else if (getWinner(square)) {
      setStatus(`The winner is ${getWinner(square)}`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"} `);
    }
  }, [square, isXTurn]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>
        <Square value={square[0]} onClick={() => handleClick(0)} />
        <Square value={square[1]} onClick={() => handleClick(1)} />
        <Square value={square[2]} onClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={square[3]} onClick={() => handleClick(3)} />
        <Square value={square[4]} onClick={() => handleClick(4)} />
        <Square value={square[5]} onClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={square[6]} onClick={() => handleClick(6)} />
        <Square value={square[7]} onClick={() => handleClick(7)} />
        <Square value={square[8]} onClick={() => handleClick(8)} />
      </div>

      {status && (
        <div
          onClick={handleRestart}
          className="mt-5 text-center font-semibold text-2xl"
        >
          <p>{status}</p>
          <button className="mt-5 px-2 py-0.5 font-semibold text-sm border-2 border-gray-500 bg-gray-300 rounded">
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
