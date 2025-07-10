import React,{useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Registration.css'
import axios from 'axios'
function Registration() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')
    // let [register, setRegister] = useState([])

    async function clickHandler(e){
        e.preventDefault()
        let data = {
            name,
            email,
            phone
        }
       await axios.post("http://localhost:5000/submit", data)
        
       setName('')
       setEmail('')
       setPhone('')
        

    }
  return (
    <>
        <Navbar/>
       <div className="form-container">
      <form className="form-box">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={clickHandler}>Register</button>
      </form>
    </div>
    </>
  )
}

export default Registration