import React , {useState} from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

 function Counter (){

            const [task, SetTask]=useState("");
            const [taskList, SetTaskList]=useState([]);

            const handleClick =(e)=>{
                 SetTask(e.target.value)
            }
            const AddTask =() =>{
                  if(taskList !==""){
                              const taskDetails= {
                                    id: Math.floor(Math.random()*100),
                                    value:task 
                              }
                              SetTaskList([...taskList, taskDetails]);
                        }     
            }


            const taskDelete= (e, id)=>{
                  SetTaskList(taskList.filter((task) => task.id !==id))
           }

            return(
                        <div>
                        <div className='counter'>
                                  <input type="text" id="text" onChange={(e) => handleClick(e)} placeholder='Enter your text'></input>
                                  <button onClick={AddTask}>Add</button>
                        </div>
                        {taskList !==[]?(
                               <ul>
                                    {taskList.map(task =>
                                    <li>{task.value}
                                    <button onClick={(e) => taskDelete(e, task.id)}>Delete</button>
                                    </li>
                                    
                                    )}
                              </ul>
                        ):null}  
                        </div>
            )
}



export default Counter;