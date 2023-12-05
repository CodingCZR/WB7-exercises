document.addEventListener('DOMContentLoaded', function() {
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener('click', handleButtonClick);

});

function handleButtonClick() {
    const toDoIDsInput = document.getElementById("todoId").value;


    fetch(`https://jsonplaceholder.typicode.com/todos/${toDoIDsInput}`)
        .then(response => response.json())
        .then(todo => {
           displayInformation(todo)
        })
}

function displayInformation(todo){
    let displayInfo = document.getElementById("message")
    displayInfo.innerText = "";

    let userId = document.createElement("p");
    userId.innerText = "User ID: " + todo.userId
    displayInfo.appendChild(userId);

    let todoID = document.createElement("p");
    todoID.innerText = "Todo id: " + todo.id;
    displayInfo.appendChild(todoID);

}
