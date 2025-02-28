const container = document.querySelector(".container");
const generateImage = document.querySelector("button");

let count = 0;

function fetchRandomImage(getCount) {
  for (let i = count; i < getCount + 5; i++) {
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${i}`;
    container.append(newImage);
  }
}
fetchRandomImage(count);

generateImage.addEventListener("click", () => {
  count = count + 5;
  fetchRandomImage(count);
});
