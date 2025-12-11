// Simple Task Manager Example in JavaScript
// ------------------------------------------
// This script demonstrates basic task management with arrays, functions,
// loops, and conditionals. It includes two console.log statements and a TODO.

// TODO: Add persistence (save tasks to a file or database)

// Define a Task class
class Task {
    constructor(id, description, completed = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }

    markComplete() {
        this.completed = true;
    }

    markIncomplete() {
        this.completed = false;
    }

    toString() {
        return `${this.id}: ${this.description} [${this.completed ? "Done" : "Pending"}]`;
    }
}

// Task Manager class
class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }

    addTask(description) {
        const task = new Task(this.nextId++, description);
        this.tasks.push(task);
        return task;
    }

    listTasks() {
        return this.tasks.map(task => task.toString()).join("\n");
    }

    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.markComplete();
        }
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }
}

// Example usage
const manager = new TaskManager();

// Add tasks
manager.addTask("Finish JavaScript project");
manager.addTask("Review pull requests");
manager.addTask("Prepare meeting notes");

// Complete one task
manager.completeTask(2);

// Remove one task
manager.removeTask(3);

// Print all tasks
console.log("Current Tasks:");
console.log(manager.listTasks());

// End of script
