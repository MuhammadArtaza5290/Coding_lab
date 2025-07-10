import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./TableData.css";
import axios from "axios";
function TableData() {
  let [formdata, setFormdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("http://localhost:5000/read");
        setFormdata(res.data);
      } catch (error) {
        console.log("Error found", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {formdata.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TableData;
