import React, {useState} from "react";
import {Button} from 'react-bootstrap'

function Counter(props){
            const [count, setCount] = useState(0);

            function increase(){
                        setCount (count+1);
            }
            function decrease(){
                        setCount (count-1);
            }

            return( 
                        <div>
                                    <div>
                                                <Button className="btn" onClick={increase}>+</Button>
                                                <h1>{count}</h1>
                                                <Button className="btn" onClick={decrease}>-</Button>
                                    </div>
                                    
                                    
                        </div>
            );
}

export default Counter;