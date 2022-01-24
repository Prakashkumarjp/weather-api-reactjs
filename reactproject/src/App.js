import React , {useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import ListItem from './ListItem';

/*function Entries(Ent) {
    return (
        <card
         imgsrc = { Ent.imgsrc }
        name = { Ent.name }
        mailid = { Ent.mailid }
        course = { Ent.course }
        year = { Ent.year }
        />
    );
}*/


function App(){

    const [task, setTask]= useState("");
    const [taskList, setTaskList]=useState([]);

function handleChange(e){
    setTask(e.target.value);
}
     
 const AddTask= ()=>{
     if(task !==""){
         const taskDetails={
             id:Math.floor(Math.random()*100),
             value:task
         }
         setTaskList([...taskList,taskDetails]);
     }
          

 }
 const taskDelete =(e,id)=>{
    e.preventDefault();
         setTaskList(taskList.filter((task)=> task.id !==id));
 
      }
    return(
        <div>
            <input type="text"  id="text" onChange={(e) =>handleChange(e)} placeholder='Enter text here...'/>
            <button onClick={AddTask} >Add</button>

            {taskList !==[]? (
            
            <ul>
                {taskList.map(task=>
                    <li><h1>{task.value}</h1>
                    <span><button onClick={e=>taskDelete(e, task.id)} >Delete</button></span>
                    </li>)}
            </ul>
        
        
        ):null}
        </div>
    )
}
export default App;


