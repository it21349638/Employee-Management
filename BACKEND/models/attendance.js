const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceschema = new Schema({

    Name : {
        type: String,
        required: true
    },
    EmpID : {
        type: String,
        required: true
    },
    aDate : {
        type: String,
        required: true
    },
    Designation : {
        type: String,
        required: true
    }

});

const attendance = mongoose.model("attendance", attendanceschema);

module.exports = attendance;