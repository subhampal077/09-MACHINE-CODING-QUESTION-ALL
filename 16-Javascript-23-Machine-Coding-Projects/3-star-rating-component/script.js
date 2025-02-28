const container = document.querySelector(".container");
const starts = document.querySelectorAll(".fa-star");
const starRatingVal = document.querySelector(".star-rating-value");

starts.forEach((el, i) => {
  el.dataset.rating = i + 1;

  el.addEventListener("mouseover", handleMouseover);
  el.addEventListener("click", handleClick);
  el.addEventListener("mouseleave", handleMouseleave);
});

let selectedStar = -1;

function handleMouseover(e) {
  const currRating = e.target.dataset.rating;
  // console.log(currRating);
  handleStarSate(currRating);
}

function handleStarSate(getRating) {
  for (let i = 0; i < 5; i++) {
    if (i < getRating) {
      starts[i].classList.add("active");
    } else {
      starts[i].classList.remove("active");
    }
  }
}

function handleMouseleave() {
  handleStarSate(selectedStar);
}

function handleClick(e) {
  const currRating = e.target.dataset.rating;
  selectedStar = currRating;
  handleStarSate(selectedStar);

  starRatingVal.textContent = selectedStar;
}
