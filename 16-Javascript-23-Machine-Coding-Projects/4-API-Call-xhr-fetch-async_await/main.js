// ALL TYPES OF API CALLS IN JAVASCRIPT

const postContainer = document.querySelector(".post-container");

// fetch data using xhr

function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.send();

  xhr.responseType = "json";
  xhr.onload = () => {
    const res = xhr.response;
    // console.log(res);

    if (xhr.status === 200) {
      displayResult(res);
    } else {
      console.log("Something went wrong");
    }
  };
}

// fetchUsingXHR();

// fetch using fetch method

function fetchUsingFetch() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayResult(data))
    .catch((err) => console.log(err.message));
}

// fetchUsingFetch();

// fetch using async await

async function fetchUsingAsyncAwait() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await res.json();
  //   console.log(data);

  displayResult(data);
}

fetchUsingAsyncAwait();

// display data in UI
function displayResult(res) {
  postContainer.innerHTML = res
    ?.map((post) => {
      if (post.id < 10) {
        return `<h4>${post.title}</h4>`;
      }
    })
    .join("");
}

// dummy json users data test
function makeHTTPRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open(method, url);
  xhr.send();
  xhr.onload = () => {
    const res = xhr.response;

    if (xhr.status === 200) {
      callback(res);
    } else {
      console.log("Error occurred!!");
    }
  };
}
// get posts using 1st user id
makeHTTPRequest("GET", "https://dummyjson.com/users", (data) => {
  // console.log(data.users[1].id);
  const userId = data.users[1].id;

  // fetching posts using userid
  makeHTTPRequest(
    "GET",
    `https://dummyjson.com/users/${userId}/posts`,
    (data) => {
      // console.log(data.posts);
    }
  );
});

// -------------------------------------- //

// Get all users using Promise xhr request

const promise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("GET", "https://dummyjson.com/users");
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(xhr.response);
    } else {
      reject("something error");
    }
  };
});

console.log(promise);

// capture the data using promise then() catch()
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// capture the data using async await 
async function getData() {
  const data = await promise;
  console.log(data);
}
getData();
