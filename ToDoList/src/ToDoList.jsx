import { useState } from "react";

function ToDoList(){
    const [tasks, setTasks] = useState(["Sample Task 1", "Sample Task 2", "Sample Task 3"]);
    const [newTask, setNewTask] = useState("");

    function handleInputchange(event){
        setNewTask(event.target.value);
    }

    function Addtask(){
        setTasks([...tasks, newTask]);
        setNewTask("");
    }
    function Deletetask(index){
        const updatetasks=tasks.filter((tasks,i) => i!=index);
        setTasks(updatetasks);
    }
    function moveUp(index){
        const updatetasks=[...tasks];
        [updatetasks[index-1], updatetasks[index]] = [updatetasks[index], updatetasks[index-1]];
        setTasks(updatetasks);
    }
    function moveDown(index){
        if(index<tasks.length-1){
            const updatetasks=[...tasks];
            [updatetasks[index+1], updatetasks[index]] = [updatetasks[index], updatetasks[index+1]];
            setTasks(updatetasks);
        }
    }
    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <input type="text" value={newTask} onChange={handleInputchange} placeholder="Enter a new task"/>
            <button onClick={Addtask}>Add Task</button>

            <ul>
                {tasks.map((tasks,index) => (
                    <li key={index}>
                        <span>{tasks}</span>
                        <button onClick={() => Deletetask(index)}>Delete</button>
                        <button onClick={() => moveUp(index)}>Up</button>
                        <button onClick={() => moveDown(index)}>Down</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ToDoList;