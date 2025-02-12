//taskmanager.js

import { Task } from './task.js';

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const task = new Task(description);
        this.tasks.push(task);
        this.renderTasks();
    }

    renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        this.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.description;
            li.style.textDecoration = task.completed ? 'line-through' : 'none';
            li.addEventListener('click', () => {
                task.toggleComplete();
                this.renderTasks();
            });
        
        taskList.appendChild(li);
    });
    }
}

export const taskManager = new TaskManager();