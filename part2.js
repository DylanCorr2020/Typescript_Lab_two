var tasks = [];
function addTask(task) {
    tasks.push(task); //add elemnts to array
    console.log("New Task Added");
    console.log("Task " + task + "inserted in the list");
    return tasks.length; //returns length of array
}
function listAllTasks() {
    console.log("All items in the Array");
    //for every task in the array called tasks
    tasks.forEach(function (task) {
        console.log(task);
    });
    console.log("End items in Array");
}
function deleteTask(task) {
    var index = tasks.indexOf(task); //where that is excatly located
    //if it is not in the array will be -1
    if (index > -1) {
        //removing the task
        tasks.splice(index, 1);
        console.log("Task Removed from array");
        console.log("Task" + task + "removed from list");
        return tasks.length;
    }
}
addTask("wake up");
addTask("Sleep");
listAllTasks();
deleteTask("Sleep");
