import React from "react";
import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import 'jspdf-autotable';

const ShowAttendance = () => {

    const [attendances, setAttendances] = useState(null)

    useEffect(()=>{
        const showAtt = async ()=>{
            const response = await fetch('http://localhost:8013/attendance/showatt')
            const json = await response.json()

            if(response.ok){
                setAttendances(json)
            }
        }
        showAtt()
    }, [])

    const DownloadPdf=()=>{
        const doc = new jsPDF()
        doc.text("Attendance Report", 80,10)
        doc.autoTable({
            attendances:attendances.map(col=>({...col,datakey:col.field})),
          body:attendances
        })
        doc.save('Attendance.pdf')
      }


    return(
        <div className="container">
            <br></br>
            <h1>Attendance</h1><br></br>
           
                <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Designation</th>
                  </tr>
                </thead>
                <tbody>
                {attendances && attendances.map((attendance)=>(
                  <tr>
                    
                    <td>{attendance.Name}</td>
                    <td>{attendance.EmpID}</td>
                    <td>{attendance.aDate}</td>
                    <td>{attendance.Designation}</td>
                  </tr>))}
                </tbody>
              </table>
              <div className="b1">
                <button type="button" class="btn btn-primary" onClick={DownloadPdf}>Download Attendance Report</button>
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}

export default ShowAttendance;