const todoList = [
    "Learning Basic JavaScript",
    "Learning OOP JavaScript",
    "Learning Document Object Model JavaScript"
];

function clearTodoList() {
    const todoListBody = document.getElementById("todoListBody");
    while (todoListBody.firstChild) {
        todoListBody.removeChild(todoListBody.firstChild);
    }
}

function removeTodoList(index) {
    todoList.splice(index, 1);
    displayTodoList();
}

function addTodoList(index, todo) {
    const tr = document.createElement("tr");
    const tdButton = document.createElement("td");

    const buttonDone = document.createElement("input");
    buttonDone.type = "button";
    buttonDone.value = "Done";
    buttonDone.onclick = function () {
        removeTodoList(index);
    };
    tdButton.appendChild(buttonDone);

    tr.appendChild(tdButton);

    const tdTodo = document.createElement("td");
    tdTodo.textContent = todo;
    tr.appendChild(tdTodo);

    const todoListBody = document.getElementById("todoListBody");
    todoListBody.appendChild(tr);
}

function displayTodoList() {
    clearTodoList();

    const searchText = document.getElementById("search").value.toLowerCase();

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];

        if (todo.toLowerCase().includes(searchText)) {
            addTodoList(i, todo);
        }
    }
}

document.forms['todoForm'].onsubmit = function (event) {
    event.preventDefault();

    const todo = document.forms['todoForm']['todo'].value;
    todoList.push(todo);

    document.forms['todoForm'].reset();

    console.log(todoList);
    displayTodoList();
};

const searchInput = document.getElementById("search");
searchInput.onkeyup = function () {
    displayTodoList();
}
searchInput.onkeydown = function () {
    displayTodoList();
}

displayTodoList();
