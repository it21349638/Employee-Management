const router = require("express").Router();
let employee = require("../models/employee");

router.route("/addemp").post((req,res)=>{

    const Name = req.body.Name
    const EmpID = req.body.EmpID
    const NIC = req.body.NIC
    const Gender = req.body.Gender
    const Email = req.body.Email
    const Title = req.body.Title
    const BasicSalary = req.body.BasicSalary
    const TotalSalary = req.body.TotalSalary

    const newcus = new employee({
        Name,
        EmpID,
        NIC,
        Gender,
        Email,
        Title,
        BasicSalary,
        TotalSalary
    })

    newcus.save().then(()=>{
        res.json("Employee Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/showemp").get((req,res)=>{

    employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/updateemp/:id").put(async(req,res)=>{

    let empID = req.params.id;
    const {Name,EmpID,NIC,Gender,Email,Title,BasicSalary,TotalSalary} = req.body;

    const updatedemp = {
        Name,
        EmpID,
        NIC,
        Gender,
        Email,
        Title,
        BasicSalary,
        TotalSalary
    }

    const update = await employee.findByIdAndUpdate(empID, updatedemp).then(()=>{
        res.status(200).send({status: "Employee updated Successfully"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating the data", error: err.message});
    })
    
})

router.route("/deleteemp/:id").delete(async(req,res)=>{
    let empID = req.params.id;

    await employee.findByIdAndDelete(empID).then(()=>{
        res.status(200).send({status: "Employee deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error while deleting the status",  error: err.message});
    })
})

router.route("/getemp/:id").get(async(req,res)=>{
    let empID = req.params.id;
    const emp = await employee.findById(empID).then((employee)=>{
        res.status(200).send({status: "Employee fetched", employee})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "error in fetching", error: err.message});
    })
})

router.route("/cal/:id").put(async(req,res)=>{
    let userId = req.params.id;

    const{
     
        BasicSalary,
        TotalSalary,
        } =req.body;

 

    const updateSalary ={
       
        BasicSalary,
        TotalSalary,
        
    }

    const update = await employee.findByIdAndUpdate(userId,updateSalary)
    .then(()=>{
        res.status(200).send({status: "Employee salary update"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});

    })



    
})

module.exports = router;