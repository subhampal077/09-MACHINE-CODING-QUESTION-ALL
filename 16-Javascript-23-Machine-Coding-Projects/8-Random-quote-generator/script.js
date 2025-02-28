// api:  http://api.quotable.io/quotes/random

const container = document.querySelector(".container");
const loadingPara = document.querySelector("p");
const refreshBtn = document.querySelector("button");

function fetchNewQuote() {
  loadingPara.innerText = "Loading...";
  fetch("http://api.quotable.io/quotes/random")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data[0]);
      data?.length > 0
        ? (loadingPara.innerText = "")
        : (loadingPara.textContent = "Something went wrong");

      data?.length !== 0 && displayQuote(data[0]);
    })
    .catch((err) => {
      console.log(err);
      loadingPara.innerText = `${err.message}`;
    });
}
fetchNewQuote();

function displayQuote(quoteData) {
  container.innerHTML = `<div class="quote-div">
      <p class="content">${quoteData.content}</p>
      <p class="author">${quoteData.author}</p>
    </div>`;
}

refreshBtn.addEventListener("click", () => {
  container.innerHTML = "";
  fetchNewQuote();
});
