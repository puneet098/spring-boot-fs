import { useState } from 'react'
import './Counter.css'

export default function Counter({by}){

    const[count, setCount] = useState(0);
  
   function increment(){
    setCount(count + by)
    console.log(count)
   }

   function decrement(){
    setCount(count - by)
    console.log(count)
   }
   
    return(
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
            <button className="counterButton" 
            onClick={increment}>+{by}</button>
            <button className="counterButton" 
            onClick={decrement}>-{by}</button>
            </div>
        </div>
    )
}