//main.js
import { taskManager } from "./taskmanager.js";

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');

addTaskButton.addEventListener('click', () => {
    const taskDescription = taskInput.value;
    if (taskDescription) {
        taskManager.addTask(taskDescription);
        taskInput.value = '';
    }
});