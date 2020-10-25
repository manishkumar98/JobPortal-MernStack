const mongoose = require('mongoose')
//equire('mongoose-type-email');
//require('mongoose-type-url');


const userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true
    },
    /*userName: {
        type: String,
        required: true
    },*/
    lastName:{
        type:String,
        required:true
    },
    /* email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    */
   /* phone: {
        type: Number,
        validate: {
            validator: function(v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
        }
    },*/
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    /*dateOfBirth: {
    time : { type : Date, default: Date.now }
    },*/
    dateOfBirth: {
    type : Date,
    default : Date.now(), 
    required:true
    },
    currentJobProfile: {
        type: String,
        required: true
    },
    employmentStatus: {
        type: String,
        required: true
    },
    currentlyWorkingIn: {
        type: String,
        required: false
    },
    startDate: {
        type : Date,
        default : Date.now(), 
        required:false
        },
    
    resumeFile:{
        type:String,
        required:true
    },
    /*resumeURL: {
    type: String,
    required: false,
    unique:true
    },*/
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    industry:{
        type:String,
        required:true
    },
    /*presentJobProfile:{
         type:String,
        required:false
    },*/

    /*currentLevel:{
         type:String,
        required:true
    },*/
    jobTitle:{
         type:String,
        required:false
    },
    description:{
         type:String,
        required:true
    }
    /*password: {
        type: String,
        required: true
    }*/
});
/*var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
userSchema.path('resumeURL').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');*/
module.exports = mongoose.model('Registration',userSchema)   
