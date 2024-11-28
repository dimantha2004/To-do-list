let tasks = [];

function addTask() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("Description").value;

    let task = {
        title: title,
        description: description
    };

    tasks.push(task);

    document.getElementById("title").value = '';
    document.getElementById("Description").value = '';

    displayTasks();
}

function displayTasks() {
    
    let todolisttable = document.getElementById("todolisttable");
    if (!todolisttable) {
        todolisttable = document.createElement("div");
        todolisttable.id = "todolisttable";  
        document.body.appendChild(todolisttable);  
    }

    let body = '';

    tasks.forEach(task => {
        body += `
        <div class="card" style="width: 18rem; margin-bottom: 1rem;">
            <div class="card-body">
                <u><h5 class="card-title">${task.title}</h5></u>
                
                <p class="card-text">${task.description}</p>
                 <label class="container">
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
                </label>
            </div>
        </div>`;
    });

    todolisttable.innerHTML = body;
}

document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault();
    addTask();
});
