document.addEventListener("DOMContentLoaded", () => {
  //grabbing the elements
  const input = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const TaskList = document.getElementById("todo-list");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    renderTask(task);
  });
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
    renderTask(newTask);
    input.value = "";
    console.log(tasks);
  });
  //save the task in local storage
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  //render function
  function renderTask(task) {
    const li = document.createElement("li");
    TaskList.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;
    //updating after completion
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask();
    });
    //deleting
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); //prevent toggle from firing
      tasks = tasks.filter((t) => t.id == task.id);
      li.remove();
      saveTask();
    });
    TaskList.appendChild(li);
  }
});
