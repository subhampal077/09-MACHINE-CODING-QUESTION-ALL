// 'https://dummyjson.com/posts'

const progress = document.querySelector(".progress");
const container = document.querySelector(".container");
const loadingText = document.querySelector(".loading-state");

async function fetchPosts() {
  loadingText.textContent = "Loading...";
  try {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
    // console.log(data.posts);
    data?.posts?.length > 0 ? (loadingText.textContent = "") : null;

    data?.posts?.length > 0 && displayData(data.posts);
  } catch (err) {
    console.log(err.message);
    loadingText.textContent = err.message;
  }
}

fetchPosts();

function displayData(data) {
  data.forEach((post) => {
    const newPara = document.createElement("p");
    newPara.innerText = post.body;
    container.append(newPara);
  });
}

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  //   console.log(scrollTop, scrollHeight, clientHeight);

  const scrollPercentage = (
    (scrollTop / (scrollHeight - clientHeight)) *
    100
  ).toFixed(0);

  //   console.log(scrollPercentage);
  progress.style.width = scrollPercentage + "%";
});
