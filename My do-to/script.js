const note = document.getElementById("note");
const items = document.getElementById("items");
const form = document.querySelector("form");

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)},
              ${Math.floor(Math.random() * 256)},
              ${Math.floor(Math.random() * 256)})`;
}

function getRandomGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const angle = Math.floor(Math.random() * 360);
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

function storeTodo() {
  const tasks = [];
  document.querySelectorAll("#items li").forEach((li) => {
    tasks.push({
      text: li.textContent.replace("⚡", "").trim(),
      checked: li.classList.contains("checked"),
    });
  });
  window.localStorage.setItem("todoList", JSON.stringify(tasks));
}

function loadTodo() {
  const savedTodos = JSON.parse(window.localStorage.getItem("todoList")) || [];
  savedTodos.forEach((todo) => addTodo(todo.text, todo.checked));
}

function addTodo(text, checked = false) {
  const li = document.createElement("li");
  li.textContent = text;
  li.style.width = "200px";
  li.style.height = "200px";
  li.style.background = getRandomGradient();

  const cross = document.createElement("span");
  cross.textContent = " ⚡";
  cross.style.cursor = "pointer";
  cross.style.marginLeft = "10px";
  cross.style.fontWeight = "bold";
  cross.style.position = "absolute";
  cross.style.top = "3px";
  cross.style.right = "3px";
  cross.style.scale = "1.2";

  li.appendChild(cross);
  if (checked) li.classList.add("checked");

  li.addEventListener("click", function () {
    li.classList.toggle("checked");
    storeTodo();
  });

  cross.addEventListener("click", function (event) {
    event.stopPropagation(); // Empêche le déclenchement du `click` sur le `li`
    li.remove();
    storeTodo();
  });

  items.appendChild(li);
  storeTodo();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (note.value.trim() === "") return;
  addTodo(note.value);
  note.value = "";
});

loadTodo();
