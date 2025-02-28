const scrollToBottom = document.querySelector(".bottom");
const scrollToTop = document.querySelector(".top");
const container = document.querySelector(".container");
const loadingErrMsg = document.querySelector(".loading-err-msg");

// 'https://dummyjson.com/users'

async function fetchUsers() {
  loadingErrMsg.textContent = "Loading Please wait!!!";
  try {
    const res = await fetch("https://dummyjson.com/users?limit=50");
    const data = await res.json();
    // console.log(data.users);

    data?.users?.length > 0 && displayData(data.users);
    loadingErrMsg.textContent = "";
  } catch (err) {
    // console.log(err.message);
    loadingErrMsg.textContent = err.message;
  }
}

fetchUsers();

function displayData(users) {
  //   users.forEach((user) => {
  //     container.innerHTML += `<p>${user.username.toUpperCase()}</p>`;
  //   });

  container.innerHTML = users
    .map((user) => {
      return `<p>* ${user.firstName} ${user.lastName}</p>`;
    })
    .join("");

  // Rather than that we can use createElement and append method
}

scrollToBottom.addEventListener("click", () => {
  // console.log(document.body.scrollHeight);
  window.scrollTo(0, document.body.scrollHeight);
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
