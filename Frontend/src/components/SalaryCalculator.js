import React, { useState } from "react";
import Swal from 'sweetalert2';

export default function Editemployee(){
    const [BasicSalary, setBasicSalary] = useState("");
    const [overtimeHours, setOvertimeHours] = useState('');
    const [ratePerHour, setRatePerHour] = useState('');


    const calculateTotal = () => {
        const total = parseFloat(BasicSalary) + (parseFloat(overtimeHours) * parseFloat(ratePerHour));
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: `Total is LKR ${total.toFixed(2)}`,
            showConfirmButton: true,
            timer: 15000
          })
      };

                return (

                    <div className="container">
                        <br></br>
                        <h1>Salary Calculator</h1>
                        <br></br>
                      
                            <div>
                            <label className="form-label">Basic Salary</label><br></br>
                            <input
                             className="form-control"
                              type="number"
                              placeholder="Basic Salary"
                              
                              onChange={(e) => setBasicSalary(e.target.value)}
                            /><br></br>
                            <label className="form-label">O/T Hours</label><br></br>
                            <input
                             className="form-control"
                              type="number"
                              placeholder="O/T Hours"
                              value={overtimeHours}
                              onChange={(e) => setOvertimeHours(e.target.value)}
                            /><br></br>
                            <label className="form-label">Rate per hour</label><br></br>
                            <input
                             className="form-control"
                              type="number"
                              placeholder="Rate per Hour"
                              value={ratePerHour}
                              onChange={(e) => setRatePerHour(e.target.value)}
                            /><br></br><br></br>
                            <button className="btn btn-primary" onClick={calculateTotal}>Calculate</button>
                          </div>
        <br></br><br></br><br></br><br></br><br></br>
            </div>
)
}