const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/UserRegistration';


const morgan = require("morgan");
const bodyParser = require("body-parser");


const app = express()

mongoose.connect(url, {useNewUrlParser:true},{ useUnifiedTopology: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})


const userRouter = require('./routes/userRegistration')

app.use(express.json())

app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(bodyParser.json({limit: '100mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use('/userRegistration',userRouter)

/*app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
*/

app.listen(3000, () => {
    console.log('Server started')
})

