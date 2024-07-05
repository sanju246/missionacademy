
const express = require ("express");
const app = express();
require('dotenv').config();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT;
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const db = require('./config/db');   
const flash = require('connect-flash');
const multer = require('multer');


const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport")






app.use(flash());


// Add middleware to expose flash messages to views
app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success');
  res.locals.error_messages = req.flash('error');
  console.log(res.locals)
  next();
});





app.use(passport.initialize());
app.use(passport.session());



app.use((req,res,next) => {
  if (req.isAuthenticated()) {
    console.log(req.user)
  }
console.log(req.session)

next();
});


app.use(function(req, res, next) {
  res.locals.req = req;
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.currentUser = req.user;
  next();
});






// // Visiting this route logs the user out
app.use('/auth', authRoute);
app.use('/', homeRoute);
app.use('/',paymentRoute);
app.use('/admin', adminRoute);
app.use('/admin/course', CourseRoute);
app.use('/admin/exam', examRoute);




app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});