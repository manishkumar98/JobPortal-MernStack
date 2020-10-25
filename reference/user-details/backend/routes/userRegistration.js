const express = require('express');
const router = express.Router();
const User = require('../models/registration');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer=require('multer');
//const path=require('path')
const mongoose = require('mongoose');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname);

    }
});
const fileFilter = (req, file, cb) => {
  // reject a file
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

//const upload=multer({dest:'uploads'});
//const upload = multer({ storage: storage });

//router.route("/upload")
    /* replace foo-bar with your form field-name */
  //  .post(upload.single("foo-bar"), function(req, res){
    //   [...]
    //})



router.get("/profile", (req, res, next) => {
  User.find()
    .select("firstName lastName email phone dateOfBirth _id currentJobProfile employmentStatus currentlyWorkingIn startDate resumeFile country city industry JobTitle description")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        userRegistration: docs.map(doc => {
          return {
            firstName: doc.firstName,
            lastName: doc.lastName,
            email: doc.email,
            //userName: req.body.email,
            phone:doc.phone,
            dateOfBirth:doc.dateOfBirth, 
            currentJobProfile:doc.currentJobProfile, 
            employmentStatus:doc.employmentStatus, 
            currentlyWorkingIn:doc.currentlyWorkingIn,
            startDate:doc.startDate, 
            resumeFile: doc.resumeFile,
            //resumeURL:req.body.resumeURL, 
            country:doc.country,   
            city:doc.city, 
            industry:doc.industry, 
            //presentJobProfile:req.body.presentJobProfile, 
            //currentLevel:req.body.currentLevel, 
            jobTitle:doc.jobTitle, 
            description:doc.description,
            //password: req.body.password
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/userRegistration/" + doc._id
            }
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
      res.status(500).json({
        error: err
      });
    });
});

router.post("/userDetails", upload.single('resumeFile'),[
  check("email", "Please enter a valid email").isEmail()
],
 (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
           firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            //userName: req.body.email,
            phone:req.body.phone,
            dateOfBirth:req.body.dateOfBirth, 
            currentJobProfile:req.body.currentJobProfile, 
            employmentStatus:req.body.employmentStatus, 
            currentlyWorkingIn:req.body.currentlyWorkingIn,
            startDate:req.body.startDate, 
            resumeFile: req.file.path,
            //resumeURL:req.body.resumeURL, 
            country:req.body.country,   
            city:req.body.city, 
            industry:req.body.industry, 
            //presentJobProfile:req.body.presentJobProfile, 
            //currentLevel:req.body.currentLevel, 
            jobTitle:req.body.jobTitle, 
            description:req.body.description
            //password: req.body.password

            
  });
//  const salt =  bcrypt.genSalt(10);
  //          user.password = bcrypt.hash(password, salt);
  
  user
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        Success: "User details saved successfully!",
        /*createdUser: {
            firstName: result.firstName,

            _id: result._id,*/
            /*request: {
                type: 'GET',
                url: "http://localhost:3000/userRegistration/" + result._id
            }*/
        });
      })
    
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

    /*const payload = {
      user: {
          id: user.id
      }
  };*/

  /*jwt.sign(
      payload,
      "randomString", {
          expiresIn: 10000
      },
      (err, token) => {
          if (err) throw err;
          res.status(200).json({
              token
          });
      }
  );*/
});

router.get("/:userId", (req, res, next) => {
  const id = req.params.userId;
  User.findById(id)
    .select("firstName lastName email phone dateOfBirth _id currentJobProfile employmentStatus currentlyWorkingIn startDate resumeFile country city industry JobTitle description")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            user: doc,
            request: {
                type: 'GET',
                url: 'http://localhost:3000/userRegistration'
            }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}); 

router.patch("/:userId",upload.single('resumeFile'), (req, res, next) => {
  const id = req.params.userId;
  User.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'User updating',
          request: {
              type: 'POST',
              url: 'http://localhost:3000/userRegistration',
              body: { name: 'String'}
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
    const alien = new User({
    _id: new mongoose.Types.ObjectId(),
           firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            userName: req.body.userName,
            phone:req.body.phone,
            dateOfBirth:req.body.dateOfBirth, 
            jobProfile:req.body.jobProfile, 
            employmentStatus:req.body.employmentStatus, 
            resumeFile: req.file.path,
            resumeURL:req.body.resumeURL, 
            country:req.body.country,   
            city:req.body.city, 
            industry:req.body.industry, 
            presentJobProfile:req.body.presentJobProfile, 
            currentLevel:req.body.currentLevel, 
            jobTitle:req.body.jobTitle, 
            description:req.body.description,
            password: req.body.password
  });
  alien
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Updated user successfully",
        createdUser: {
             firstName: result.firstName,
            _id: result._id,
            request: {
                type: 'GET',
                url: "http://localhost:3000/userRegistration/" + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

});

router.delete("/:userId", (req, res, next) => {
  const id = req.params.userId;
  User.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'User deleted',
          request: {
              type: 'POST',
              url: 'http://localhost:3000/userRegistration',
              body: { name: 'String'}
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


module.exports = router
