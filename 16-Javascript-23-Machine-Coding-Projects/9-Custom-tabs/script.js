const tabContainer = document.querySelector(".tab-container");
const tabBtns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

tabContainer.addEventListener("click", (e) => {
  const dataId = e.target.dataset.id;
  // console.log(dataId);

  if (dataId) {
    tabBtns.forEach((tab) => {
      tab.classList.remove("active");
    });

    e.target.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    const activeContent = document.getElementById(dataId);
    // console.log(activeContent);
    activeContent.classList.add("active");
  }
});
