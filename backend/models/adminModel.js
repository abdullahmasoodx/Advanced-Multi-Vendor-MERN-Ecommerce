const {Schema, model} = require('mongoose');


const adminSchema  = new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:false
    },
    role:{
        type:String,
        required:true,
        default:"admin"
    }
})


module.exports = model("admins", adminSchema);