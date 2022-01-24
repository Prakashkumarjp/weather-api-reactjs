import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [val, setVal]= useState(10);
    const [val1, setVal1]= useState(10);

    useEffect(()=>{
setVal1(val*2)
    },[val])
    const increase= ()=>{
        setVal(val+1);
    }
    const increase1= ()=>{
        setVal1(val1+1);
    }
  
    return(
        <div>
            <p>{val}</p>
            <p>{val1}</p>
            <button onClick={increase}>toggle</button>
            {/* <button onClick={increase1}>toggle</button> */}
        </div>
    )
}
export default App;


