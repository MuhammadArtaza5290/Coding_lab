import React,{useState} from 'react'
import "./Form.css"
function Form() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    
    function nameHandler(e){
        setName(e.target.value)
    }
    function emailHandler(e){
        setEmail(e.target.value)
    }
  return (
    <>
    <h1 style={{textAlign:'center', margin:'20px'}}>Login Form!</h1>
    <h2 style={{ margin:'10px'}}>Input</h2>
    <input type="text" placeholder='Enter Your Name' onChange={nameHandler} /> <br/>
    <input type="text" placeholder='Enter Your Email' onChange={emailHandler} />
    <h2 style={{textAlign:'center', margin:'20px'}}>Output</h2>
    <div style={{height:"350px", width:"450px", backgroundColor: 'aliceblue', margin: "auto"}}>
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
    </div>
    </>
    )
}

export default Form

