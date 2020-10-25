const mongoose = require('mongoose')
var Schema = mongoose.Schema;


userProfileSchema = new Schema({
    unique_id: Number,
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    phone: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type : Date,
        required:true,
        default : Date.now()
    },
    currentEmploymentStatus:{
        type : String,
        required : true 
    },
    currentJobTitle:{
        type : String,
        required : true 
    },
    seekingJobTitle:{
        type : String,
        required : true 
    },
    industry:{
        type : String,
        required : true 
    },
    description:{
        type : String,
        required : true 
    },
    resume:{
        type : String,
        required : true 
    },
    currentlyWorkingIn:{
        type : String,
        required : true 
    },
    startDate : {
        type : Date,
        required:true,
        default : Date.now()
    }


});

UserProfile = mongoose.model('UserProfile',userProfileSchema);
module.exports = UserProfile;
