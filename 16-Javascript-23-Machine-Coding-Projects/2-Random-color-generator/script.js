const container = document.querySelector(".container");
const generateHexColor = document.querySelector(".hex-btn");
const hexText = document.querySelector(".hex-text");
const rgbText = document.querySelector(".rgb-text");
const generateRgbColor = document.querySelector(".rgb-btn");
const redVal = document.querySelector("#red");
const greenVal = document.querySelector("#green");
const blueVal = document.querySelector("#blue");

// hex part
generateHexColor.addEventListener("click", () => {
  const charSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  let char = "#";
  for (let i = 0; i < 6; i++) {
    char += charSet[Math.floor(Math.random() * charSet.length)];
  }
  hexText.innerText = char;
  //   container.children[0].setAttribute("style", `background-color: ${char}`)
  container.children[0].style.backgroundColor = char;
});

hexText.addEventListener("click", () => {
  navigator.clipboard.writeText(hexText.innerText);
});

// rgb part
generateRgbColor.addEventListener("click", () => {
  let rgbValue = `rgb(${redVal.value}, ${greenVal.value}, ${blueVal.value})`;

  rgbText.innerText = rgbValue;
  container.children[1].style.backgroundColor = rgbValue;
});

rgbText.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbText.innerText);
});
