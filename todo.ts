import{todoInterface} from'./todointerface';

class Todo implements todoInterface{

    constructor(){

    }

    tasks: Array<string> = [];


     addTask(task:string):number{

        this.tasks.push(task); //add elemnts to array
        console.log("New Task Added");
        console.log("Task " + task + "inserted in the list");
        return this.tasks.length; //returns length of array
    }


    listAllTasks():void{

        console.log("All items in the Array");
        //for every task in the array called tasks
       this.tasks.forEach(function(task){
            console.log(task);
        })
        console.log("End items in Array");
    
        
    }

    deleteTask(task:string):number{

        let index:number = this.tasks.indexOf(task); //where that is excatly located
        //if it is not in the array will be -1
        if(index > -1)
        {
            //removing the task
           this.tasks.splice(index,1); //defined out of method use this
            console.log("Task Removed from array");
            console.log("Task"+task+"removed from list");
            return this.tasks.length;
        }
        
        }
}

let myTodos = new Todo();
myTodos.addTask("eat");
myTodos.addTask("sleep");

myTodos.listAllTasks();

myTodos.deleteTask("sleep");