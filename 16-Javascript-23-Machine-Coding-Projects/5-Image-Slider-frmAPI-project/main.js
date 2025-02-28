// "https://picsum.photos/v2/list?page=1&limit=10"

const imageContainer = document.querySelector(".image-container");
const dotContainer = document.querySelector(".dot-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

async function fetchImages() {
  const res = await fetch("https://picsum.photos/v2/list?page=1&limit=10");

  const data = await res.json();
  // console.log(data);

  data?.map((img, i) => {
    const newImg = document.createElement("img");
    newImg.src = img.download_url;
    newImg.classList.add("new-img");
    i === 0 ? newImg.classList.add("active") : "";
    imageContainer.append(newImg);

    const newBtn = document.createElement("button");
    newBtn.classList.add("dot-btn");
    i === 0 ? newBtn.classList.add("active") : "";
    dotContainer.append(newBtn);
  });
}

fetchImages();

setTimeout(() => {
  let currActiveSlide = 0;
  const newImages = document.querySelectorAll(".new-img");
  // console.log(newImages);
  const dotBtns = document.querySelectorAll(".dot-btn");

  nextBtn.addEventListener("click", () => {
    currActiveSlide++;
    if (currActiveSlide > newImages.length - 1) {
      currActiveSlide = 0;
    }
    updateActiveDot(currActiveSlide);
    updateActiveImage(currActiveSlide);
  });

  prevBtn.addEventListener("click", () => {
    currActiveSlide--;
    if (currActiveSlide < 0) {
      currActiveSlide = newImages.length - 1;
    }
    updateActiveDot(currActiveSlide);
    updateActiveImage(currActiveSlide);
  });

  dotBtns.forEach((el, i) => {
    el.addEventListener("click", () => {
      currActiveSlide = i;
      updateActiveDot(currActiveSlide);
      updateActiveImage(currActiveSlide);
    });
  });

  function updateActiveDot(currActiveSlide) {
    dotBtns.forEach((el, i) => {
      if (i === currActiveSlide) {
        el.classList.add("active");
      } else el.classList.remove("active");
    });
  }

  function updateActiveImage(currActiveSlide) {
    newImages.forEach((el, i) => {
      if (i === currActiveSlide) {
        el.classList.add("active");
      } else el.classList.remove("active");
    });
  }
}, 1000);
