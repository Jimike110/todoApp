function add() {
    
    // var todo = document.getElementById("newTodo").value;
    // var list = document.getElementById("list").cloneNode();
    // var ul = document.getElementById("list");
    // ul.appendChild(todo);
    var newLI = document.createElement("li");
    var listItem = document.getElementById("newTodo");
    if (!/\S/.test(listItem.value)) {
        alert("To-do cannot be blank.");
        e.preventDefault();
    }
    var LIcontent = document.createTextNode(listItem.value);
    LIcontent.d
    
    
    newLI.appendChild(LIcontent);
    var ul = document.getElementById("list");
    ul.appendChild(newLI);
    document.getElementById("newTodo").value = "";
}