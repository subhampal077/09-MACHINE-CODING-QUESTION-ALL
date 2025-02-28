const todosContainer = document.querySelector(".todos-container");
const inputBox = document.querySelector(".input");
const addButton = document.querySelector(".add-btn");
const errorMessage = document.querySelector(".error-msg");

let currentEditTodo = null;

function createNewTodoItem(inputText) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo-wrapper");
  const newPara = document.createElement("p");
  newPara.textContent = inputText;

  const childDiv = document.createElement("div");
  childDiv.classList.add("btn-wrapper");
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  childDiv.append(editBtn, deleteBtn);
  newDiv.append(newPara, childDiv);
  return newDiv;
}

function saveTodoToLocalstorage(inputText) {
  let todosArray;
  if (localStorage.getItem("todos") === null) {
    todosArray = [];
  } else {
    todosArray = JSON.parse(localStorage.getItem("todos"));
  }

  todosArray.push(inputText);
  localStorage.setItem("todos", JSON.stringify(todosArray));
}

function handleEditTodoOnLocalstorage(currentTodoText) {
  console.log(currentTodoText);

  let todosArray = JSON.parse(localStorage.getItem("todos"));
  let index = todosArray.indexOf(currentTodoText);
  console.log(todosArray);
  console.log(index);
  todosArray[index] = inputBox.value;
  localStorage.setItem("todos", JSON.stringify(todosArray));
}

function addNewTodo() {
  const extractInput = inputBox.value.trim();
  //   console.log(extractInput);
  if (extractInput.length <= 0) {
    errorMessage.textContent = "Enter some valid Input!!";
    return;
  }

  if (addButton.textContent === "Edit Todo") {
    handleEditTodoOnLocalstorage(
      currentEditTodo.parentElement.previousElementSibling.textContent
    );

    currentEditTodo.parentElement.previousElementSibling.textContent =
      extractInput;
    addButton.textContent = "Add Todo";
    inputBox.value = "";
    errorMessage.textContent = "";
  } else {
    const newTodoItem = createNewTodoItem(extractInput);
    todosContainer.append(newTodoItem);
    inputBox.value = "";
    errorMessage.textContent = "";

    saveTodoToLocalstorage(extractInput);
  }
}

function fetchFromLocalstorage() {
  let todosArray;
  if (localStorage.getItem("todos") === null) {
    todosArray = [];
  } else {
    todosArray = JSON.parse(localStorage.getItem("todos"));

    todosArray.forEach((singleTodo) => {
      const getDiv = createNewTodoItem(singleTodo);
      todosContainer.append(getDiv);
    });
  }
}

function handleDeleteTodoFromLocalStorage(getTodo) {
  let todosArray;
  if (localStorage.getItem("todos") === null) {
    todosArray = [];
  } else {
    todosArray = JSON.parse(localStorage.getItem("todos"));
  }

  let getTodoText = getTodo.children[0].innerText;
  let index = todosArray.indexOf(getTodoText);

  todosArray.splice(index, 1);

  localStorage.setItem("todos", JSON.stringify(todosArray));
}

function handleEditOrDeleteTodo(e) {
  // console.log(
  //   e.target.parentElement.parentElement,
  //   e.target.parentElement.previousElementSibling
  // );

  if (e.target.textContent === "Delete") {
    e.target.parentElement.parentElement.remove();
    handleDeleteTodoFromLocalStorage(e.target.parentElement.parentElement);
  }

  if (e.target.textContent === "Edit") {
    // console.log(e.target.parentElement.previousElementSibling.textContent);

    inputBox.value = e.target.parentElement.previousElementSibling.textContent;
    inputBox.focus();
    addButton.textContent = "Edit Todo";

    currentEditTodo = e.target;
  }
}

document.addEventListener("DOMContentLoaded", fetchFromLocalstorage);
addButton.addEventListener("click", addNewTodo);
todosContainer.addEventListener("click", handleEditOrDeleteTodo);
