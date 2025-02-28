const openModalBtn = document.querySelector(".open-modal");
const modalBackground = document.querySelector(".modal-background");
const closeModalBtn = document.querySelector(".close-modal");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");

openModalBtn.addEventListener("click", (e) => {
  e.target.classList.remove("active");
  modalBackground.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
  openModalBtn.classList.add("active");
  modalBackground.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  openModalBtn.classList.add("active");
  modalBackground.classList.remove("active");
});

modalBackground.addEventListener("click", () => {
  openModalBtn.classList.add("active");
  modalBackground.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});
