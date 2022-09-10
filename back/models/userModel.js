const mongoose = require('mongoose');
const userModel=mongoose.Schema({
    username:{
        type:String,
        trim:true,
        unique:true,
        max:25
    },
    fullname:{
        type:String,
        trim:true,
        max:25
    },
    email:{type:String,
    trim:true,
    require:true
    },
    passward:{
        type:String,
        require:true
    },
    address:{
        type:String,
        default:'',

    },
    website:{
        type:String,
        default:''
    },
    timestamp:true
})