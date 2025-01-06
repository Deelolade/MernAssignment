const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required : true
    },
    phone:{
        type: String,
        required:true
    },
    age:{
        type: String,
        required : true
    },
})
const Users = mongoose.model("User",UserSchema);
module.exports = Users; 