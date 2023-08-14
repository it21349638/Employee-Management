const router = require("express").Router();
let attendance = require("../models/attendance");

router.route("/addatt").post((req,res)=>{

    const Name = req.body.Name
    const EmpID = req.body.EmpID
    const aDate = req.body.aDate
    const Designation = req.body.Designation

    const newatt = new attendance({
        Name,
        EmpID,
        aDate,
        Designation
    })

    newatt.save().then(()=>{
        res.json("Attendance marked")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/showatt").get((req,res)=>{

    attendance.find().then((attend)=>{
        res.json(attend)
    }).catch((err)=>{
        console.log(err)
    })

})

module.exports = router;