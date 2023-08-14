import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FetchData = () => {

    const [employees, setEmployees] = useState(null)
    const [deleteEmployee, setEmployeeDelete] = useState("");

    useEffect(()=>{
        const showEmp = async ()=>{
            const response = await fetch('http://localhost:8013/employee/showemp')
            const json = await response.json()

            if(response.ok){
                setEmployees(json)
            }
        }
        showEmp()
    }, [])

    const deleteemployee=async (id) => {
      try {
        await axios.delete(`http://localhost:8013/employee/deleteemp/${id}`);
        setEmployeeDelete(employees.filter((item) => item.id !== id));
        alert('Employee Removed');
        window.location.reload(); 
        
      } catch (error) {
        alert('Error deleting data', error);
        console.log(error);
      }
    };

    return(
        <div className="container">
          <br></br>
            <h1>Employees</h1><br></br>
           <div className="b1">
            <br></br>
            <Link to='/addemp' class="btn btn-success">Add Employee</Link>&nbsp;
            <Link to='/addatt' class="btn btn-success">Attendance</Link>&nbsp;
            <Link to={`/cal`} class="btn btn-primary">Salary Calculator</Link>
           </div>
                <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Emp ID</th>
                    <th scope="col">NIC</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Basic Salary</th>
                    <th scope="col">Total Salary</th>
                  </tr>
                </thead>
                <tbody>
                {employees && employees.map((employee)=>(
                  <tr>
                    
                    <td>{employee.Name}</td>
                    <td>{employee.EmpID}</td>
                    <td>{employee.NIC}</td>
                    <td>{employee.Gender}</td>
                    <td>{employee.Email}</td>
                    <td>{employee.Title}</td>
                    <td>{employee.BasicSalary}</td>
                    <td>{employee.TotalSalary}</td>
                    <div class="d-grid gap-2 d-md-block">
                        <Link to={`/updateemp/${employee._id}`} class="btn btn-warning">Edit</Link>&nbsp;
                        <button onClick={()=>deleteemployee(employee._id)} class="btn btn-danger">Delete</button>
                    </div>
                  </tr>))}
                </tbody>
              </table>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        
    )
}

export default FetchData;