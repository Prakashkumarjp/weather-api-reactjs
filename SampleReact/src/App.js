import React, {useState} from "react";
import './App.css';
// import ToDoItem from "./ToDoItem";

function App() {
 const [task, setTask] = useState("");
 const [taskList, setTaskList] = useState([]);

 const handleChange = (e) =>{
  setTask(e.target.value);
 }

const AddTask = () =>{
  if(task !==""){
    const taskDetails ={
      id: Math.floor(Math.random()*100),
      value:task  
    }
setTaskList([...taskList,taskDetails])
  }
} 
const deleteTask =(e,id)=>{
  setTaskList(taskList.filter((task) => task.id != id));
}

  return(
    <div className="App">
      <div className="ToDo"><h2>ToDo List</h2></div>
      <input type="text"
      id="text"
      onChange={(e) => handleChange(e)}
      placeholder="Ener your text..."/>
      <button onClick={AddTask}>Add</button>

      {taskList !==[]?(
        <ul>
           {taskList.map(task =>
             <li className="ListItem">{task.value}
               <button onClick={(e) => deleteTask(e, task.id)} className="Delete" >Delete</button>   
            </li>
          )}
      </ul> 
      ):null}
    </div>
  );
}

export default App;