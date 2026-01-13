//grabbing the elements
//document.getElementById("input-container");
const input = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const TaskList = document.getElementById("todo-list");
let tasks = [];
addTaskBtn.addEventListener("click", () => {
  const inputText = input.value.trim();
  if (inputText == "") return 0;
  const newTask = {
    id: Date.now(),
    text: inputText,
    completed: false,
  };
  tasks.push(newTask);
  input.value = "";
  console.log(tasks);
});
