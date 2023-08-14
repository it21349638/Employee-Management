const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeschema = new Schema({

    Name : {
        type: String,
        required: true
    },
    EmpID : {
        type: String,
        required: true
    },
    NIC : {
        type: String,
        required: true
    },
    Gender : {
        type: String,
        required: true
    },
    Email : {
        type: String,
        required: true
    },
    Title : {
        type: String,
        required: true
    },
    BasicSalary : {
        type: String,
        required: true
    },
    TotalSalary : {
        type: String,
        required: true
    }

});

const employee = mongoose.model("employee", employeeschema);

module.exports = employee;