import React, { useState } from "react";
import "./Input.css";
import Tablee from "../tablee/Tablee";
import * as yup from 'yup';
function Input() {
  let [name, setName] = useState("");
  let [fathername, setFathername] = useState("");
  let [postaladdress, setPostaladdress] = useState("");
  let [personaladdress, setPersonaladdress] = useState("");
  let [city, setCity] = useState("");
  let [course, setCourse] = useState("");
  let [district, setDistrict] = useState("");
  let [state, setState] = useState("");
  let [pincode, setPincode] = useState("");
  let [email, setEmail] = useState("");
  let [dob, setDob] = useState("");
  let [phone, setPhone] = useState("");
  let [gender, setGender] = useState("");
  let [register, setRegister] = useState([]);
  let [userid, setUserid] = useState(null);
  let[errormessage, setErrormessage] = useState({})




  let userSchema = yup.object({
  name: yup.string('Name must be string').required("Please Enter your name").matches(/^[A-Za-z ]+$/, "Name must contain only letters"),
  fathername: yup.string().required().matches(/^[A-Za-z ]+$/, "Father Name must contain only letters"),
  postaladdress: yup.string().required().matches(/^[A-Za-z ]+$/, "Address must contain only letters"),
  personaladdress: yup.string().required().matches(/^[A-Za-z ]+$/, "Personal address must contain only letters"),
  city: yup.string().required(),
  course: yup.string().required(),
  district: yup.string().required(),
  state: yup.string().required(),
  pincode: yup.number().required().positive().integer(),
  email: yup.string().email().required(),
  phone: yup.number().required().positive().integer()
});


  function handleChange(e) {
    setGender(e.target.value);
  }

 async function handleSubmit(e) {
    e.preventDefault();
    try {
      let data = await userSchema.validate({
      id: userid !== null ? userid : register.length + 1,
      name,
      fathername,
      postaladdress,
      personaladdress,
      gender,
      city,
      course,
      district,
      state,
      pincode: Number(pincode),
      email,
      dob,
      phone: Number(phone),
    },{abortEarly: false});
   

    if (userid !== null) {
      let update = register.map((item) => {
        return item.id === userid ? data : item;
      });
      setRegister(update);
      setUserid(null);
    } else {
      setRegister([...register, data]);
    }

     setName("");
    setFathername("");
    setPostaladdress("");
    setPersonaladdress("");
    setGender("");
    setCity("");
    setCourse("");
    setDistrict("");
    setState("");
    setEmail("");
    setPincode("");
    setDob("");
    setPhone("");

    } catch (error) {
      // if (error.name === 'ValidationError') {
      //   let errObj = {};
      //   error.inner.forEach((err)=>{
      //     errObj[err.path] = err.message;
      //   })
      //    setErrormessage(errObj);
      // }else{
      //   console.log('unexpected error', error);
        
      // }
      
      if (error.name === 'ValidationError') {
        let errObj = {}
        error.inner.forEach((err)=>{
          errObj[err.path] = err.message;
        })
        setErrormessage(errObj)
      }else{
        console.log('unexpected error', error);
        
      }
    }
    
    
   
  }

  function updateHandler(item) {
    setUserid(item.id);
    setName(item.name);
    setFathername(item.fathername);
    setPostaladdress(item.postaladdress);
    setPersonaladdress(item.personaladdress);
    setGender(item.gender);
    setCity(item.city);
    setCourse(item.course);
    setDistrict(item.district);
    setState(item.state);
    setEmail(item.email);
    setPincode(item.pincode);
    setDob(item.dob);
    setPhone(item.phone);
  }

  return (
    <>
      <form className="form-container">
        <h2>Registration Form</h2>

        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          name="name"
          value={name}
        />
        {errormessage.name && <p className="error" style={{color: 'red', fontSize: '10px', paddingTop: '0px'}}>{errormessage.name}</p>}
        <input
          type="text"
          onChange={(e) => setFathername(e.target.value)}
          placeholder="Father Name"
          name="fathername"
          value={fathername}
        />
        {errormessage.fathername && <p className="error" style={{color: 'red', fontSize: '10px', paddingTop: '0px'}}>{errormessage.fathername}</p>}
        <input
          type="text"
          onChange={(e) => setPostaladdress(e.target.value)}
          placeholder="Postal Address"
          name="postaladdress"
          value={postaladdress}
        />
        {errormessage.postaladdress && <p className="error" style={{color: 'red', fontSize: '10px', paddingTop: '0px'}}>{errormessage.postaladdress}</p>}
        <input
          type="text"
          onChange={(e) => setPersonaladdress(e.target.value)}
          placeholder="Personal Address"
          name="personaladdress"
          value={personaladdress}
        />
        {errormessage.personaladdress && <p className="error" style={{color: 'red', fontSize: '10px', paddingTop: '0px'}}>{errormessage.personaladdress}</p>}

        <div className="form-group">
          <label>Sex:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </div>
        {errormessage.gender && <p className="error" style={{color: 'red', fontSize: '10px', paddingTop: '0px'}}>{errormessage.gender}</p>}
        <div className="form-group">
          <label>City:</label>
          <select
            name="city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          >
            <option value="Faisalabad">Faisalabad</option>
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
          </select>
          {errormessage.city && <p className="error" style={{color: 'red', fontSize: '10px', paddingTop: '0px'}}>{errormessage.city}</p>}
        </div>

        <div className="form-group">
          <label>Course:</label>
          <select
            name="course"
            onChange={(e) => setCourse(e.target.value)}
            value={course}
          >
            <option value="IT">Information Technology</option>
            <option value="AI">Artificial Intelligence</option>
            <option value="ML">Machine Learning</option>
            <option value="SE">Software Engineering</option>
          </select>
          {errormessage.course && <p className="error" style={{color: 'red', fontSize: '10px', paddingTop: '0px'}}>{errormessage.course}</p>}
        </div>

        <div className="form-group">
          <label>District:</label>
          <select
            name="district"
            onChange={(e) => setDistrict(e.target.value)}
            value={district}
          >
            <option value="Faisalabad">Faisalabad</option>
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
            <option value="Quetta">Quetta</option>
            <option value="Peshawar">Peshawar</option>
          </select>
          {errormessage.district && <p className="error" style={{color: 'red', fontSize: '10px', paddingTop: '0px'}}>{errormessage.district}</p>}
        </div>

        <div className="form-group">
          <label>State:</label>
          <select
            name="state"
            onChange={(e) => setState(e.target.value)}
            value={state}
          >
            <option value="Punjab">Punjab</option>
            <option value="Sindh">Sindh</option>
            <option value="KP">Khyber Pakhtunkhwa</option>
            <option value="Blochistan">Blochistan</option>
          </select>
          {errormessage.state && <p className="error" style={{color: 'red', fontSize: '10px', paddingTop: '0px'}}>{errormessage.state}</p>}
        </div>

        <input
          type="text"
          placeholder="Pin Code"
          onChange={(e) => setPincode(e.target.value)}
          name="pincode"
          value={pincode}
        />
        {errormessage.pincode && <p className="error" style={{color: 'red', fontSize: '10px', paddingTop: '0px'}}>{errormessage.pincode}</p>}
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
        />
        {errormessage.email && <p className="error" style={{color: 'red', fontSize: '10px', paddingTop: '0px'}}>{errormessage.email}</p>}

        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            onChange={(e) => setDob(e.target.value)}
            value={dob}
          />
          {errormessage.dob && <p className="error" style={{color: 'red', fontSize: '10px', paddingTop: '0px'}}>{errormessage.dob}</p>}
        </div>

        <input
          type="text"
          placeholder="Mobile No."
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        {errormessage.phone && <p className="error" style={{color: 'red', fontSize: '10px', paddingTop: '0px'}}>{errormessage.phone}</p>}
        <button type="submit" onClick={handleSubmit}>
          {userid !== null ? "Update User" : "Create User"}
        </button>
      </form>

      <div>
        <Tablee
          userRegister={register}
          stateRegister={setRegister}
          updateFunction={updateHandler}
        />
      </div>
    </>
  );
}

export default Input;
