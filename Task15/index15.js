// const taskInput = document.querySelector(".form__input");
// const addTaskButton = document.querySelector(".form__btn");
// const task = document.querySelector(".js--todos-wrapper");
//
// addTaskButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const taskText = taskInput.value.trim();
//
//     if (taskText === "") {
//         alert("Please enter a task.");
//         return;
//     }
//
//     const listItem = document.createElement("li");
//     listItem.classList.add("todo-item");
//
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//
//     checkbox.addEventListener("change", function ()
//         listItem.classList.toggle("todo-item--checked");
//     });
//
//     const taskSpan = document.createElement("span");
//     taskSpan.textContent = taskText;
//
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//
//     deleteButton.addEventListener("click", function () {
//         task.removeChild(listItem);
//     });
//
//     listItem.appendChild(checkbox);
//     listItem.appendChild(taskSpan);
//     listItem.appendChild(deleteButton);
//
//     task.appendChild(listItem);
//
//     taskInput.value = "";
// });



const form = document.forms.form;
const taskList = document.querySelector('.js--todos-wrapper');

let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(task => addTask(task.content, task.checked));
}

function addTask(content, checked = false) {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.checked = checked;

    const taskText = document.createElement("span");
    taskText.classList.add('todo-item__description');
    taskText.textContent = content;

    const removeTaskButton = document.createElement('button');
    removeTaskButton.classList.add('todo-item__delete');
    removeTaskButton.textContent = "Видалити";

    checkbox.addEventListener('change', function () {
        const taskIndex = tasks.findIndex(task => task.content === content);
        if (taskIndex !== -1) {
            tasks[taskIndex].checked = checkbox.checked;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    });

    removeTaskButton.addEventListener("click", function () {
        li.remove();
        tasks = tasks.filter(task => task.content !== content);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    li.append(checkbox, taskText, removeTaskButton);
    taskList.append(li);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskInput = form.elements['value'];
    const taskContent = taskInput.value.trim();

    if (taskContent) {
        const task = { content: taskContent, checked: false };
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        addTask(taskContent);
        taskInput.value = '';
    }
});
