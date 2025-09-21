import React,{useContext} from "react";
import { CounterContext } from "../context/counter";
function Counter() {
    const countState = useContext(CounterContext)
    console.log(countState);
    function incrementHandler(){
        countState.setCount(countState.count + 1)
    }
    function decrementHandler(){
        countState.setCount(countState.count - 1)
    }
    
  return (
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

export default Counter;
