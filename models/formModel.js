const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const formSchema = mongoose.Schema({
    surname:{
        type: String,
        required:"Surname is required",
        trim:true,
        minlength:1,
        maxlength:16,
    },
    given_name:{
        type:String,
        required:"Given name is required ",
        trim:true,
        minlength:1,
        maxlength:16,
    },
    residence:{
        type:String,
        required:"residence is required",
        trim:true,
        minlength:1,
        maxlength:20,
    },
    occupation:{
        type: String,
        required:"Occupation is required",
        minlength:5,
        maxlength:20,
        trim:true,
    },
    dob:{
        type:Date,
        default:Date.now,
        required:"DOB is reqired",
        trim:true,
    },
    category:{
        type:String,
        required:"Category required",
        trim:true,
    },
    nationality:{
        type: String,
        required:"Nationality required",
        
        trim:true,
    },

    

})
formSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('Form',formSchema)