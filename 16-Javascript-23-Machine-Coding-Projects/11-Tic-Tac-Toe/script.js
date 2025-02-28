const board = document.querySelector(".board");
const squares = document.querySelectorAll(".square");
const message = document.querySelector(".message");
const restart = document.querySelector(".restart-btn");

const players = ["X", "O"];

let currPlayer = players[0];

const winningMatches = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if (squares[i].innerText !== "" || getWinner(currPlayer)) {
      return;
    }
    squares[i].innerText = currPlayer;

    if (getWinner(currPlayer)) {
      message.textContent = `Game Over! Winner is ${currPlayer}! Please Restart`;
      return;
    }

    if (getTie()) {
      message.textContent = `Game Tied! Please Restart`;
      return;
    }

    currPlayer = currPlayer === players[0] ? players[1] : players[0];

    message.textContent = currPlayer === players[0] ? "X's Turn" : "O's Turn";
  });
}

function getWinner(currPlayer) {
  for (let i = 0; i < winningMatches.length; i++) {
    const [a, b, c] = winningMatches[i];

    if (
      squares[a].innerText === currPlayer &&
      squares[b].innerText === currPlayer &&
      squares[c].innerText === currPlayer
    ) {
      return true;
    }
  }
  return false;
}

function getTie() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === "") {
      return false;
    }
  }
  return true;
}

restart.addEventListener("click", () => {
  message.textContent = "X's Turn";
  currPlayer = players[0];
  squares.forEach((squares) => {
    squares.innerText = "";
  });
});
