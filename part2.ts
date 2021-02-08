let tasks: string[] = [];


function addTask(task:string):number{

    tasks.push(task); //add elemnts to array
    console.log("New Task Added");
    console.log("Task " + task + "inserted in the list");
    return tasks.length; //returns length of array
}


function listAllTasks():void{

    console.log("All items in the Array");
    //for every task in the array called tasks
    tasks.forEach(function(task){
        console.log(task);
    })
    console.log("End items in Array");

    
}

function deleteTask(task:string):number{

let index:number = tasks.indexOf(task); //where that is excatly located
//if it is not in the array will be -1
if(index > -1)
{
    //removing the task
    tasks.splice(index,1);
    console.log("Task Removed from array");
    console.log("Task"+task+"removed from list");
    return tasks.length;
}

}

let x:number = addTask("wake up");
console.log("Number of itmes is" + x);
addTask("Sleep");

listAllTasks();

deleteTask("Sleep");