// Define the DOM elements as constants
const addButton = document.querySelector("#btn");
const inputBox = document.querySelector("#newTodo");
const listGroup = document.querySelector("#list");

// Function to save the current state of the list to localStorage
function saveList() {
  localStorage.setItem('list', listGroup.innerHTML);
}

// Function to add a new todo item to the list
function addTodo () {
    // Create the list item and remove button
    let createListItem = document.createElement("li");
    let createButton = document.createElement("button");
    createButton.innerHTML = "&times;"
    createButton.classList.add("clear-btn");
    let todoItem = inputBox.value;

    // Check for a no-string input, throws an alert and does not add item
    if (!/\S/.test(todoItem)) {
    alert("Please enter a to-do item.");
    preventDefault();
    todoItem = "";
    }

    // Add the todo item text and remove button to the list item
    createListItem.append(todoItem);
    createListItem.append(createButton);

    // Add the list item to the list group
    listGroup.append(createListItem);
    inputBox.value = "";

    // Scroll to the appended list item
    createListItem.scrollIntoView();

    // Save the updated list to localStorage
    saveList();
}

// Load the saved list from localStorage on page load
if (localStorage.getItem('list')) {
  listGroup.innerHTML = localStorage.getItem('list');
}

// Event listener for the remove button
listGroup.addEventListener('click', function(e) {
  if (e.target.classList.contains('clear-btn')) {
    e.target.parentElement.remove();
    saveList();
  }
});
