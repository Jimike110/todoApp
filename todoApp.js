//var button = document.createElement("button");

function saveState() {
  const todoList = document.getElementById("list").innerHTML;
  localStorage.setItem("todoList", todoList);
}

// Load the saved state of the to-do list
function loadState() {
  const savedTodoList = localStorage.getItem("todoList");
  if (savedTodoList) {
    document.getElementById("list").innerHTML = savedTodoList;
  }
}

function add() {

  // var todo = document.getElementById("newTodo").value;
  // var list = document.getElementById("list").cloneNode();
  // var ul = document.getElementById("list");
  // ul.appendChild(todo);
  var newLI = document.createElement("li");
  var listItem = document.getElementById("newTodo");
  if (!/\S/.test(listItem.value)) {
    document.getElementById("newTodo").value = "";
    alert("To-do item cannot be empty or contain only whitespaces.");
    e.preventDefault();
  }
  var LIcontent = document.createTextNode(listItem.value);

  //button.innerHTML = '&times';
  //button.classList.add("clear-btn");
  //button.onclick = btnSave;
  //newLI.appendChild(button);

  newLI.appendChild(LIcontent);
  var ul = document.getElementById("list");
  var listt = ul.appendChild(newLI);
  listt;
  document.getElementById("newTodo").value = "";

  //saveState();

  //newLI.addEventListener("click", function(e) {
  //if (e.target.classList.contains("clear-btn")) {
  //var parent = e.target.parentElement;
  //parent.remove();
  //}
  //saveState();
  //});

  function btnSave() {
    //var par = e.target.parentElement;
    newLI.remove();
  }
}

// Call the loadState function when the page loads
window.onbeforeunload = saveState;
window.onload = loadState;

// let input = document.getElementById("newTodo");

// input.value = localStorage.getItem("newTodo");
// let cancel;
// input.addEventListener("keyup", event => {
//     if (cancel) clearTimeout(cancel)
//     cancel = setTimeout(() => {
//         localStorage.setItem("newTodo", event.target.value)
//     }, 1000);

// });

// window.onload = function() {
//     localStorage.setItem("text", listItem.value());
// }
// var text = localStorage.getItem("text");
// console.log(text);

// Save the current state of the to-do list


// Call the saveState function whenever the to-do list changes
//const addTodoButton = document.getElementById("btn");
//addTodoButton.addEventListener("click", saveState);