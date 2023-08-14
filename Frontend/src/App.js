import React from "react";
import Header from "./components/Header";
import FetchData from "./components/FetchData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditEmployee from "./components/EditEmployee";
import AddEmployee from "./components/AddEmployee";
import Attendance from "./components/Attendance";
import MarkAttendance from "./components/MarkAttendance";
import Footer from "./components/Footer";
import SalaryCal from "./components/SalaryCalculator";

function App() {
  return (
    
    <div className="App">
     <Header/>
     <Routes>
        <Route path="/" element={<FetchData/>}/>
        <Route path="/addemp" element={<AddEmployee/>}/>
        <Route path="/updateemp/:id" element={<EditEmployee/>}/>
        <Route path="/addatt" element={<MarkAttendance/>}/>
        <Route path="/showatt" element={<Attendance/>}/>
        <Route path="/cal" element={<SalaryCal/>}/>
     </Routes>
     <Footer/>
    </div>

  );
}

export default App;