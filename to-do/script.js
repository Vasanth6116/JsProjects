document.addEventListener("DOMContentLoaded", () => {
  //grabbing the elements
  const input = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const TaskList = document.getElementById("todo-list");
  let tasks = [];
  //actions to perform when the button is clicked
  addTaskBtn.addEventListener("click", () => {
    const inputText = input.value.trim();
    if (inputText == "") return 0;
    const newTask = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    input.value = "";
    console.log(tasks);
  });
  //save the task in local storage
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
