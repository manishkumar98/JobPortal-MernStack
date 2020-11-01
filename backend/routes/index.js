var express = require('express');
var router = express.Router();
var User = require('../models/user');

//var userProfile = require('./userProfile');



router.get('/', (req, res, next) => {
	 res.json('User Created Successfully');
});


router.post('/register', (req, res, next) => {
	console.log(req.body);
	var personInfo = req.body;

	//console.log('Here');
						
	if (!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf) {
		res.json();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			//console.log('Here');
						
			User.findOne({ email: personInfo.email }, (err, data) => {
						
				if (!data) {
					var c;
					//console.log('Here');
					User.findOne({}, (err, data) => {

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						} else {
							c = 1;
						}

						var newPerson = new User({
							unique_id: c,
							email: personInfo.email,
							username: personInfo.username,
							password: personInfo.password,
							passwordConf: personInfo.passwordConf
						});
						//globalVariable.x = c;
						console.log('Here');
						newPerson.save((err, Person) => {
							if (err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({ _id: -1 }).limit(1);
					res.json({ "Success": "You are registered,You can login now." });
				} else {
					res.json({ "Success": "Email is already used." });
				}

			});
		} else {
			res.json({ "Success": "password is not matched" });
		}
	}
});

//router.get('/login', (req, res, next) => {
//	return res.render('login.ejs');
//});

router.post('/login', (req, res, next) => {
	//console.log(req.body);
	User.findOne({ email: req.body.email }, (err, data) => {
		if (data) {

			if (data.password == req.body.password) {
				//console.log("Done Login");
				req.session.userId = data.unique_id;
				console.log(req.session.userId);
				res.json({ "Success": "Success!"});

			} else {
				res.json({ "Success": "Wrong password!" });
			}
		} else {
			res.json({ "Success": "This Email Is not regestered!" });
		}
	});
});

router.get('/profile', (req, res, next) => {
	console.log("profile");
	User.findOne({ unique_id: req.session.userId }, (err, data) => {
		console.log("data");
		//res.json(data);
		if (!data) {
			res.json("session expired");
		} else {
			//console.log("found");
			res.json(data);
		}
	});
});

router.get('/logout', (req, res, next) => {
	console.log("logout")
	if (req.session) {
		// delete session object
		req.session.destroy((err) => {
			if (err) {
				next(err);
			} else {
				console.log("logged out")
				res.json("Logged Out")
			}
		});
	}
});

//router.get('/forgetpass', (req, res, next) => {
//	res.("forget.ejs");
//});

router.post('/forgetpass', (req, res, next) => {
	//console.log('req.body');
	//console.log(req.body);
	User.findOne({ email: req.body.email }, (err, data) => {
		
		if (!data) {
			res.json({ "Success": "This Email Is not regestered!" });
		} else {
			// res.send({"Success":"Success!"});
			if (req.body.password == req.body.passwordConf) {
				data.password = req.body.password;
				data.passwordConf = req.body.passwordConf;

				data.save((err, Person) => {
					if (err)
						console.log(err);
					else{
						console.log('Success');
						console.log(data);
					}
					res.json({ "Success": "Password changed!" });
				});
			} else {
				res.json({ "Success": "Password does not matched! Both Password should be same." });
			}
		}
	});

});

module.exports = router;