const progressBar = document.querySelector(".progress");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;

nextBtn.addEventListener("click", () => {
  if (currentStep < circles.length) {
    currentStep++;
  }
  updateStep();
  //   console.log(currentStep);
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
  }
  updateStep();
  //   console.log(currentStep);
});

function updateStep() {
  circles.forEach((circle, i) => {
    if (currentStep > i) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  progressBar.style.width = `${
    ((currentStep - 1) / (circles.length - 1)) * 100
  }%`;

  currentStep === circles.length
    ? (nextBtn.disabled = true)
    : (nextBtn.disabled = false);

  currentStep === 1 ? (prevBtn.disabled = true) : (prevBtn.disabled = false);
}
