import React, {useState} from "react";
import axios from "axios";

export default function AddEmployee(){

    const [Name, setName] = useState("");
    const [EmpID, setEmpID] = useState("");
    const [NIC, setNIC] = useState("");
    const [Gender, setGender] = useState("");
    const [Email, setEmail] = useState("");
    const [Title, setTitle] = useState("");
    const [BasicSalary, setBasicSalary] = useState(""); 
    const [TotalSalary, setTotalSalary] = useState(""); 

    function sendData(e){
        e.preventDefault();

        const newemployee ={
            Name,
            EmpID,
            NIC,
            Gender,
            Email,
            Title,
            BasicSalary,
            TotalSalary
        }
       axios.post("http://localhost:8013/employee/addemp", newemployee).then(()=>{
        alert("Employee added")
       }).catch((err)=>{
        alert(err)
       })
    }

    return(
        <div className="container">
            <br></br>
            <div><h1>Add new Employee</h1></div>
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
                <label for="vtype" class="form-label">NIC</label>
                <input type="text" class="form-control" id="vtype" aria-describedby="emailHelp" onChange={(e)=>{
                    setNIC(e.target.value);
                }}/>
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Gender</label>
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" onChange={(e)=>{
                    setGender(e.target.value);
                }}/>
            </div>
            <div class="mb-3">
                <label for="vno" class="form-label">Email</label>
                <input type="text" class="form-control" id="vno" aria-describedby="emailHelp" onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
            </div>
            <div class="mb-3">
                <label for="vtype" class="form-label">Job Title</label>
                <input type="text" class="form-control" id="vtype" aria-describedby="emailHelp" onChange={(e)=>{
                    setTitle(e.target.value);
                }}/>
            </div>
            <div class="mb-3">
                <label for="vtype" class="form-label">Basic Salary</label>
                <input type="text" class="form-control" id="vtype" aria-describedby="emailHelp" onChange={(e)=>{
                    setBasicSalary(e.target.value);
                }}/>
            </div>
            <div class="mb-3">
                <label for="vtype" class="form-label">Total Salary</label>
                <input type="text" class="form-control" id="vtype" aria-describedby="emailHelp" onChange={(e)=>{
                    setTotalSalary(e.target.value);
                }}/>
            </div>
            <button type="submit" class="btn btn-primary">Add Employee</button>
        </form>
       <br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}