import React from 'react'
import './Tablee.css'
function Tablee({userRegister, stateRegister, updateFunction}) {
   function deleteHandler(id){
    
   let updateList = userRegister.filter((user)=> id !== user.id)
   stateRegister(updateList)
   
   }
    
  return (
    <>
<div className="table-wrapper">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Registration no.</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>Postal Address</th>
            <th>Personal Address</th>
            <th>Gender</th>
            <th>City</th>
            <th>Course</th>
            <th>District</th>
            <th>State</th>
            <th>Pin Code</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Phone no.</th>
            <th>Delete/Update</th>
          </tr>
        </thead>
        <tbody>
            {userRegister.map((val, index)=>{
                return(
            <tr key={index}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.fathername}</td>
                <td>{val.postaladdress}</td>
                <td>{val.personaladdress}</td>
                <td>{val.gender}</td>
                <td>{val.city}</td>
                <td>{val.course}</td>
                <td>{val.district}</td>
                <td>{val.state}</td>
                <td>{val.pincode}</td>
                <td>{val.email}</td>
                <td>{val.dob}</td>
                <td>{val.phone}</td>
                <td>
                  <button onClick={()=>deleteHandler(val.id)}>Delete</button>
                  <button onClick={()=>updateFunction(val)}>Update</button>
                </td>
             </tr>
                )
            })}
         
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Tablee