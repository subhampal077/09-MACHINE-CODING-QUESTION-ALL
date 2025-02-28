const productContainer = document.querySelector(".product-container");
const loadMoreBtn = document.querySelector("button");

let skip = 0;
let productArray = [];

async function fetchProducts(skipVal) {
  const res = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${skipVal}&select=title,price`
  );

  const data = await res.json();
  console.log(data);

  // USING INNER-HTML
  //   productArray = [...productArray, ...data.products];

  //   productContainer.innerHTML = productArray
  //     ?.map((item) => {
  //       return `<div class="product-div"><p>${item.title}</p><p>Price: $${item.price}</p></div>`;
  //     })
  //     .join("");

  // USING CREATE-ELEMENT (optimized)
  data?.products?.forEach((item) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-div");
    productDiv.innerHTML = `<p>${item.title}</p><p>Price: $${item.price}</p>`;

    productContainer.append(productDiv);
  });
}

fetchProducts(skip);

loadMoreBtn.addEventListener("click", () => {
  skip += 10;
  // you can only fetch 50 products //
  skip !== 50
    ? fetchProducts(skip)
    : loadMoreBtn.setAttribute("disabled", "true");
});
