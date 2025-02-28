const container = document.querySelector(".container");
const input = document.querySelector("input");
const search = document.querySelector("button");
const inputErrorText = document.querySelector(".error");
const baseURL = "https://api.github.com/users/";

function fetchUserDetails() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${baseURL}${input.value}`);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      //   console.log(xhr.response);
      xhr?.response && displayData(xhr.response);
    } else {
      console.log("Error!!", xhr.status, xhr.statusText);
    }
  };
}

search.addEventListener("click", () => {
  if (input.value.trim().length > 0) {
    fetchUserDetails();
  } else {
    inputErrorText.textContent = "Enter a valid Input";

    setInterval(() => {
      inputErrorText.textContent = "";
    }, 3000);
  }
});

function displayData(data) {
  container.innerHTML = `
  <p>Name: ${data.name}</p>
    <p>Bio: ${data.bio}</p>
    <img src="${data.avatar_url}" alt="" />
    <p>Location: ${data.location}</p>
    <p>Public Repository: ${data.public_repos}</p>
    <p>
      Open Profile: &nbsp;<a
        target="blank"
        href="https://github.com/${data.login}"
        >Github profile</a
      >
    </p>
  `;

  input.value = "";
}
