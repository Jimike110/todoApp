function add() {
    
    // var todo = document.getElementById("newTodo").value;
    // var list = document.getElementById("list").cloneNode();
    // var ul = document.getElementById("list");
    // ul.appendChild(todo);
    var newLI = document.createElement("li");
    var listItem = document.getElementById("newTodo");
    if (!/\S/.test(listItem.value)) {
        alert("To-do item cannot contain only whitespaces.");
        e.preventDefault();
    }
    var LIcontent = document.createTextNode(listItem.value);   
    newLI.appendChild(LIcontent);
    var ul = document.getElementById("list");
    var listt = ul.appendChild(newLI);
    listt;
    document.getElementById("newTodo").value = "";
}
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

