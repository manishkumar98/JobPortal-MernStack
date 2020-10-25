const express  = require('express')
const router1 = express.Router()
const UserProfile = require('../models/userProfileSchema')
const User = require('../models/user')
const multer=require('multer')
const mongoose = require('mongoose')
const path = require('path')













const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./profilePic/')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname);

    }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
  fileFilter: fileFilter
});


router1.get("/allProfile", (req, res, next) => {
  UserProfile.find()
    .select("firstName lastName email phone country city dateOfBirth currentEmploymentStatus currentJobTitle seekingJobTitle industry description resume currentlyWorkingIn startDate unique_id ")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        userProfile: docs.map(doc => {
          return {
            firstName: doc.firstName,
            lastName: doc.lastName,
            email: doc.email,
            phone: doc.phone,
            country: doc.country,
            city: doc.city,
            dateOfBirth: doc.dateOfBirth,
            currentEmploymentStatus: doc.currentEmploymentStatus,
            currentJobTitle: doc.currentJobTitle,
            seekingJobTitle: doc.seekingJobTitle,
            industry: doc.industry,
            description: doc.description,
            currentlyWorkingIn: doc.currentlyWorkingIn,
            startDate: doc.startDate,
            unique_id: doc.unique_id,
            resume:doc.resume,
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        error: err
      });
    });
});

router1.post("/myProfile", upload.single('resume'), (req, res, next) => {
    var c;
    User.findOne({email : req.body.email}, (err, data) => {

            c = data.unique_id;
        
  
  
  
  
    const userProfile = new UserProfile({
            unique_id: c,
           firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            country: req.body.country,
            city: req.body.city,
            dateOfBirth: req.body.dateOfBirth,
            currentEmploymentStatus: req.body.currentEmploymentStatus,
            currentJobTitle: req.body.currentJobTitle,
            seekingJobTitle: req.body.seekingJobTitle,
            industry: req.body.industry,
            description: req.body.description,
            currentlyWorkingIn: req.body.currentlyWorkingIn,
            startDate: req.body.startDate, 
           resume: req.file.path
            
  });
  userProfile
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        "Success": "User details saved successfully",
       
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        error: err
      });
    });
});
});

router1.get("/:email", (req, res, next) => {
  UserProfile.findOne({email : req.params.email})
    .select("firstName lastName email phone country city dateOfBirth currentEmploymentStatus currentJobTitle seekingJobTitle industry description resume currentlyWorkingIn startDate unique_id")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            userProfile: doc,
        });
      } else {
        res
          .status(404)
          .json({ "Success": "No valid entry found for provided emailID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ error: err });
    });
});
router1.patch("/:email",upload.single('resume'), (req, res, next) => {
  UserProfile.remove({ email : req.params.email})
    .exec()
    /*.then(result => {
      res.status(200).json({
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        error: err
      });
    });*/

    var c;
    User.findOne({email : req.body.email}, (err, data) => {

            c = data.unique_id;
    

    const userProfile = new UserProfile({
    unique_id: c,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    country: req.body.country,
    city: req.body.city,
    dateOfBirth: req.body.dateOfBirth,
    currentEmploymentStatus: req.body.currentEmploymentStatus,
    currentJobTitle: req.body.currentJobTitle,
    seekingJobTitle: req.body.seekingJobTitle,
    industry: req.body.industry,
    description: req.body.description,
    currentlyWorkingIn: req.body.currentlyWorkingIn,
    startDate: req.body.startDate, 
   resume: req.file.path
   
  });
  userProfile
    .save()
       .then(result => {
      res.status(200).json({
        "Success": "User details updated successfully",
        
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        error: err
      });
    });

});
});

router1.delete("/:email", (req, res, next) => {

  UserProfile.remove({ email : req.params.email })
    .exec()
    .then(result => {
      res.status(200).json({
          "Success": 'User profile deleted',
         
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        error: err
      });
    });
});

module.exports = router1
