const contentContainer = document.querySelector(".content-container");
const btnContainer = document.querySelector(".btn-container");

const categories = ["All", "Men", "Women", "Kids"];

const content = [
  {
    id: "Men",
    label: "Men Shirt 1",
  },
  {
    id: "Men",
    label: "Men Shirt 2",
  },
  {
    id: "Men",
    label: "Men Shirt 3",
  },
  {
    id: "Men",
    label: "Men Shirt 4",
  },
  {
    id: "Men",
    label: "Men Shirt 5",
  },
  {
    id: "Women",
    label: "Women Shirt 1",
  },
  {
    id: "Women",
    label: "Women Shirt 2",
  },
  {
    id: "Women",
    label: "Women Shirt 3",
  },
  {
    id: "Women",
    label: "Women Shirt 4",
  },
  {
    id: "Women",
    label: "Women Shirt 5",
  },
  {
    id: "Kids",
    label: "Kids Shirt 3",
  },
  {
    id: "Kids",
    label: "Kids Shirt 4",
  },
  {
    id: "Kids",
    label: "Kids Shirt 5",
  },
  {
    id: "Kids",
    label: "Kids Shirt 10",
  },
  {
    id: "Kids",
    label: "Kids Shirt 20",
  },
];

categories.forEach((el) => {
  const newBtn = document.createElement("button");
  newBtn.innerText = el;
  newBtn.classList.add("filter-btn");
  btnContainer.append(newBtn);
});

content.forEach((item) => {
  contentContainer.innerHTML += `<p class="card ${item.id}">${item.label}</p>`;
});

const allCards = document.querySelectorAll(".card");
const allButtons = document.querySelectorAll(".filter-btn");

allButtons.forEach((singleFilterBtn) => {
  singleFilterBtn.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    filterCards(e.target.innerText);
  });
});

function filterCards(filterCategory) {
  allCards.forEach((card) => {
    if (filterCategory === "All") {
      card.classList.remove("hide");
    } else {
      if (card.classList.contains(filterCategory)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    }
  });
}
