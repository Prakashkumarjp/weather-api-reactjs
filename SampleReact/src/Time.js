import React, { useState } from "react";

function Time(){
            let Time=new Date().toLocaleTimeString();
            const [state,SetTime] =useState(Time);

            setInterval(ChangeTime, 1000);


            function ChangeTime(){
                        const newTime = new Date().toLocaleTimeString();
                        SetTime(newTime);
                        
                        //console.log(newTime);
            }
            return(
                        <div>
                                    <h1>{Time}</h1>
                                    <button onClick={ChangeTime}>Get Time</button>
                        </div>
            );
}

export default Time;