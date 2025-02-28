const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
const navbar = document.querySelector(".navbar");

navbar.addEventListener("click", (e) => {
  const dataId = e.target.dataset.id;
  //   console.log(dataId);

  if (dataId) {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const activeContent = document.getElementById(`${dataId}`);
    // console.log(activeContent);
    activeContent.classList.add("active");
  }
});

const navTop = navbar.offsetTop;

window.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  if (window.scrollY >= navTop) {
    navbar.classList.add("sticky-navbar");
  } else {
    navbar.classList.remove("sticky-navbar");
  }
});
