document.addEventListener("DOMContentLoaded", function () {


    function addTask() {
        const input = document.getElementById('task-input').value.trim();
        const taskDate = document.getElementById('task-date').value;
        if (input !== '' && taskDate !== '') {
            var task = {
                name: input,
                date: taskDate,
                completed: false,
                reminder
            };
        }
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        displayTasks();
        input = '';
        taskDate = '';
    }

    function displayTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const taskList = document.getElementById('task-list');
        // const taskList = tasks.map((task, index) => {if(task.completed){`<li index><p>${task.name}${task.date}li.appendChild(${checkbox})</p></li>`}})
        tasks.forEach((task,index) => {
            const listItem = document.createElement('li');
            listItem.className = 'task-item';
            if(task.completed){
                listItem.classList.add('completed');
            }

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function () {
            tasks[index].completed = !tasks[index].completed;
            storage();
        })

        const taskName = document.createElement('span');
        taskName.textContent = input;

        const dueDate = document.createElement('span');
        dueDate.textContent = taskDate;

        if(task.reminder && new Date(dueDate) <= new Date()){
            dueDate.classList.add('reminder');
        }

        listItem.appendChild(taskName);
        listItem.appendChild(dueDate);
        listItem.appendChild(checkbox);
         taskList.appendChild(listItem);

    });
        // document.getElementById('task-list').innerHTML = taskList;
    }

    function storage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});