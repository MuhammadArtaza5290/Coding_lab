import { useState } from "react";
import "./App.css";
import ColorPicker from "./components/colorPicker/ColorPicker";
import Form from "./components/form/Form";
// import Theme from "./components/theme/Theme";

function App() {
  // let [theme, setTheme] = useState('light')
  // let [counter, setCounter] = useState(0)
  // function increment(){
  //   if (counter == 20) {
  //     setCounter(20)
  //   }else{
  //     setCounter(counter + 1)
  //   }
  // }
  // function decrement() {
  //   if (counter == 0) {
  //     counter = 0
  //     setCounter(counter)
  // } else {
  //   setCounter(counter - 1)
  // }

  // }
  // function reset(){
  //   counter = 0
  //   setCounter(counter)
  // }

  return (
    <>
      {/* <Theme/> */}
      {/* <ColorPicker/> */}
      <Form/>
      {/* <div style={{backgroundColor: 'gray', width: '100%'}}>
        <h1>Counter App {counter}</h1>
        <div style={{border: '1px solid black',height: '250px', borderRadius: '20px', backgroundColor: 'lightgrey'}}>
        <h2>Counter : {counter}</h2>
        <div style={{marginTop: '100px'}}>
          <button onClick={increment}>increment + {counter}</button>
          <button onClick={decrement}>decrement - {counter}</button>
        </div>
        <button onClick={reset}>Reset</button>
      </div>
      </div> */}
    </>
  );
}

export default App;
