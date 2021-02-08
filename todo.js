"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task); //add elemnts to array
        console.log("New Task Added");
        console.log("Task " + task + "inserted in the list");
        return this.tasks.length; //returns length of array
    };
    Todo.prototype.listAllTasks = function () {
        console.log("All items in the Array");
        //for every task in the array called tasks
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End items in Array");
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task); //where that is excatly located
        //if it is not in the array will be -1
        if (index > -1) {
            //removing the task
            this.tasks.splice(index, 1); //defined out of method use this
            console.log("Task Removed from array");
            console.log("Task" + task + "removed from list");
            return this.tasks.length;
        }
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask("eat");
myTodos.addTask("sleep");
myTodos.listAllTasks();
myTodos.deleteTask("sleep");
