const cardsContainer = document.querySelector(".cards-container");
const paginationContainer = document.querySelector(".pagination-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const cardsData = Array.from({ length: 60 }, (_, i) => `Card ${i + 1}`);

const totalCardsPerPage = 10;
const totalPages = Math.ceil(cardsData.length / totalCardsPerPage);
let currentPage = 1;

function displayCards(currPage) {
  cardsContainer.innerHTML = "";

  const startIndex = (currPage - 1) * totalCardsPerPage;
  const endIndex = startIndex + totalCardsPerPage;

  const cardsTodisplay = cardsData.slice(startIndex, endIndex);

  cardsTodisplay.forEach((card) => {
    const newCard = document.createElement("p");
    newCard.innerText = card;
    cardsContainer.append(newCard);
  });
}

function createPaginationButtons() {
  paginationContainer.innerHTML = "";

  if (currentPage === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }

  if (currentPage === totalPages) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }

  for (let i = 1; i <= totalPages; i++) {
    const newBtn = document.createElement("button");
    newBtn.innerText = i;
    newBtn.classList.add("pagination-btn");
    newBtn.classList.add("btn");
    paginationContainer.append(newBtn);

    if (i === currentPage) {
      newBtn.classList.add("active");
    }

    newBtn.addEventListener("click", () => {
      currentPage = i;
      updatePagination();
    });
  }
}

// displayCards(currentPage);
// createPaginationButtons();

function updatePagination() {
  displayCards(currentPage);
  createPaginationButtons();
}

prev.addEventListener("click", () => {
  currentPage--;
  updatePagination();
});

next.addEventListener("click", () => {
  currentPage++;
  updatePagination();
});

updatePagination();
