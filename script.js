const todoList = document.querySelector("#todoList");
const addItemButton = document.querySelector("#submit");
const completedList = document.querySelector("#completedList");

addItem = () => {
  const item = document.querySelector("#item").value;
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li>${item} | <i class="removeMark fa-solid fa-xmark"></i> <i class="completeMark fa-solid fa-check"></i> </li>`
  );
  const removeMarks = document.querySelectorAll(".removeMark");
  const completeMarks = document.querySelectorAll(".completeMark");
  removeMarks.forEach((element) => {
    element.addEventListener("click", removeTask);
  });
  completeMarks.forEach((element) => {
    element.addEventListener("click", completeTask);
  });
};

const removeTask = (e) => {
  e.currentTarget.parentNode.remove();
};

const completeTask = (e) => {
  // add item to list of completed tasks, add delete complete button
  completedList.insertAdjacentHTML(
    "beforeend",
    `<li>${e.currentTarget.parentNode.textContent} <i class="removeMark fa-solid fa-xmark"></i></li>`
  );
  e.currentTarget.parentNode.remove();
  const removeMarks = document.querySelectorAll(".removeMark");
  removeMarks.forEach((element) => {
    element.addEventListener("click", removeTask);
  });
};

addItemButton.addEventListener("click", addItem);
