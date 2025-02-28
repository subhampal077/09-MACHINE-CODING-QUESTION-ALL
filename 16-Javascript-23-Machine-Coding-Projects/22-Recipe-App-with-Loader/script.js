const container = document.querySelector(".container");
const loading = document.querySelector(".loading");
const recipeDetails = document.querySelector(".recipe-details");

function fetchRecipes() {
  loading.classList.add("show");
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((data) => {
      loading.classList.remove("show");

      //   console.log(data.recipes);
      data?.recipes?.length > 0 && dispplayRecipe(data.recipes);
    })
    .catch((err) => (loading.textContent = err.message));
}

fetchRecipes();

function dispplayRecipe(data) {
  container.innerHTML = data
    .map((item) => {
      return `
        <div class="recipe">
            <img src=${item.image}>
            <h2>${item.name}</h2>
            <p>${item.cuisine}</p>
            <p>${item.mealType[0]}</p>
            <p>${item.rating}</p>
            <button class="details-btn" data-id=${item.id}>Recipe Details</button>
        </div>
        `;
    })
    .join("");
}

setTimeout(() => {
  const detailsBtns = document.querySelectorAll(".details-btn");
  //   console.log(detailsBtns);

  detailsBtns.forEach((detailsBtn) => {
    detailsBtn.addEventListener("click", (e) => {
      const Id = e.target.dataset.id;
      handleRecipeDetails(Id);
    });
  });
}, 2000);

async function handleRecipeDetails(getId) {
  const res = await fetch(`https://dummyjson.com/recipes/${getId}`);
  const data = await res.json();
  //   console.log(data);

  if (data) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    handleDisplayRecipeDetails(data);
  }
}

function handleDisplayRecipeDetails(data) {
  recipeDetails.innerHTML = `
            <h1>Details of Individual Recipe </h1>
            <img src=${data.image}>
            <h2>${data.name}</h2>
            <p>${data.cuisine}</p>
            <p>${data.mealType[0]}</p>
            <p>${data.rating}</p>
            `;
}
