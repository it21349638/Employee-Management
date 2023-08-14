import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MarkAttendance(){

    const [Name, setName] = useState("");
    const [EmpID, setEmpID] = useState("");
    const [aDate, setaDate] = useState("");
    const [Designation, setDesignation] = useState("");

    function sendData(e){
        e.preventDefault();

        const newattend ={
            Name,
            EmpID,
            aDate,
            Designation
        }
       axios.post("http://localhost:8013/attendance/addatt", newattend).then(()=>{
        alert("Marked Successfully")
       }).catch((err)=>{
        alert(err)
       })
    }

    return(
        <div className="container">
            <br></br>
            <div><h1>Mark your Attendance</h1></div>
            <form onSubmit={sendData}>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" onChange={(e)=>{
                    setName(e.target.value);
                }}/>
            </div>
            <div class="mb-3">
                <label for="vno" class="form-label">Employee ID</label>
                <input type="text" class="form-control" id="vno" aria-describedby="emailHelp" onChange={(e)=>{
                    setEmpID(e.target.value);
                }}/>
            </div>
            <div class="mb-3">
                <label for="vtype" class="form-label">Date</label>
                <input type="date" class="form-control" id="vtype" aria-describedby="emailHelp" onChange={(e)=>{
                    setaDate(e.target.value);
                }}/>
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Designation</label>
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" onChange={(e)=>{
                    setDesignation(e.target.value);
                }}/>
            </div>
           
            <button type="submit" class="btn btn-primary">Mark Attendance</button>&nbsp;
            <Link to='/showatt' class="btn btn-primary">View Attendance</Link>
        </form>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )

}