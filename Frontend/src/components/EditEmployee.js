import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function Editemployee(){
    const [employee, setemployee] = useState({});
    const [loading, setLoading] = useState(true);
    const [Name, setName] = useState("");
    const [EmpID, setEmpID] = useState("");
    const [NIC, setNIC] = useState("");
    const [Gender, setGender] = useState("");
    const [Email, setEmail] = useState("");
    const [Title, setTitle] = useState("");
    const [BasicSalary, setBasicSalary] = useState("");
    const [TotalSalary, setTotalSalary] = useState("");  
    const params = useParams();
    const userId = params.id;

    useEffect(() => {
        async function Getid(){
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:8013/employee/getemp/${userId}`)

                setemployee(res.data);
                console.log(res.data);
                setName(res.data.Name);
                setEmpID(res.data.EmpID);
                setNIC(res.data.NIC);
                setGender(res.data.Gender);
                setEmail(res.data.Email);
                setTitle(res.data.Title);
                setBasicSalary(res.data.BasicSalary);
                setTotalSalary(res.data.TotalSalary)
               
                setLoading(false);
            } catch (err) {
                setLoading(false);
                alert(err.message);
            }
        }
        Getid();
    }, [userId])

    function handleSubmit(e) {
        e.preventDefault();
        const updatedemployee = {
            Name,
            EmpID,
            NIC,
            Gender,
            Email,
            Title,
            BasicSalary,
            TotalSalary
        }
        axios.put(`http://localhost:8013/employee/updateemp/${userId}`, updatedemployee)
            .then(() => {
                alert("Employee data updated");
            })
            .catch((err) => {
                alert(err);
                });
                }

                return (

                    <div className="container">
                        <br></br>
                        <h1>Update Employee</h1>
                      
                        {loading ? (
                            <div>Loading...</div>

                        ) : (employee && Object.keys(employee).length !== 0 ? (

                            <form onSubmit={handleSubmit}>
                
                                <div className="mb-3">
                                    <label for="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder={employee.employee.Name}
                                        value={employee.Name} onChange={(e) => setName(e.target.value)} />
                                </div>
                
                                <div className="mb-3">
                                    <label for="age" className="form-label">EmpID</label>
                                    <input type="text" className="form-control" id="age" placeholder={employee.employee.EmpID}
                                        value={employee.EmpID} onChange={(e) => setEmpID(e.target.value)} />
                                </div>
                
                                <div className="mb-3">
                                    <label for="gender" className="form-label">NIC</label>
                                    <input type="text" className="form-control" id="gender" placeholder={employee.employee.NIC}
                                        value={employee.NIC} onChange={(e) => setNIC(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="name" className="form-label">Gender</label>
                                    <input type="text" className="form-control" id="name" placeholder={employee.employee.Gender}
                                        value={employee.Gender} onChange={(e) => setGender(e.target.value)} />
                                </div>
                
                                <div className="mb-3">
                                    <label for="age" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="age" placeholder={employee.employee.Email}
                                        value={employee.Email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                
                                <div className="mb-3">
                                    <label for="gender" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="gender" placeholder={employee.employee.Title}
                                        value={employee.vType} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="gender" className="form-label">Basic Salary</label>
                                    <input type="text" className="form-control" id="gender" placeholder={employee.employee.BasicSalary}
                                        value={employee.vType} onChange={(e) => setBasicSalary(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="gender" className="form-label">Total Salary</label>
                                    <input type="text" className="form-control" id="gender" placeholder={employee.employee.TotalSalary}
                                        value={employee.vType} onChange={(e) => setTotalSalary(e.target.value)} />
                                </div>
                
                                <button type="submit" className="btn btn-primary">Update</button>
                
                            </form>
                            ) : (
            <div>Loading...</div>
        ))}
        <br></br><br></br><br></br><br></br><br></br>
            </div>
)
}