import React, {useState} from 'react'

function StudentList() {
    let[name, setName] = useState('')
    let[email, setEmail] = useState('')
    let[phone, setPhone] = useState('')
    let[address, setAddress] = useState('')
    let[student, setStudent] = useState([])

    // console.log('student variable',student);
    
    function nameHandler(e){
        setName(e.target.value)
    }
    function emailHandler(e){
        setEmail(e.target.value)
    }
    function phoneHandler(e){
        setPhone(e.target.value)
    }
    function addressHandler(e){
        setAddress(e.target.value)
    }
    function submitHandler(e){
        e.preventDefault()
        let list ={
            name,
            email,
            phone,
            address
        }
        setStudent([...student, list])
        // console.log(list);
        
    }

  return (
    <>
    <form action="Submit">
    <input type="text" placeholder='Name' onChange={nameHandler}/>
    <input type="text" placeholder='Email' onChange={emailHandler}/>
    <input type="text" placeholder='Phone no' onChange={phoneHandler}/>
    <input type="text" placeholder='Address' onChange={addressHandler}/>
    <input type="submit" onClick={submitHandler}/>
    </form>


    {student.map((std)=>{
        return(
            <div>
            <h1>{std.name}</h1>
            <h1>{std.email}</h1>
            <h1>{std.phone}</h1>
            <h1>{std.address}</h1>
            </div>
        )
    })}
    </>

    )
}

export default StudentList