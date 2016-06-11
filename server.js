var express = require('express');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('./auth');
var mongoose = require('mongoose');
var db = require('./db');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var Admin = require('./server/models/admin.js');
//var routes = require('./routes/api.js');



// Init App
var app = express();

// function isLoggedIn(req, res, next) {
//   if(req.isAuthenticated())
//     return next();
//     res.redirect('/bob');
//   }

// app.get('/home', isLoggedIn, function(req, res) {
//   res.render('./client/partials/home.html', {
//     admin: req.Admin
//   });
// });

// Define middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Passport init
app.use(session({
    secret: 'keyboard cat',
    store: new MongoStore({ mongooseConnection: db }),
    proxy: true,
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());


// Set Static Folder
app.use(express.static('client'));

// Get client folder
app.get('*', function(req, res, next){
  res.sendFile(__dirname + "/client/index.html");
});

app.get('/logout', function(req, res) {
  req.logout();
  res.send(200);
});

app.get('/login', function(req, res) {
  console.log("data ", res);
  res.send(200);
});

app.post('/api/login', passport.authenticate('login', {
  failureRedirect: '/',
  successRedirect: '/home'
}), function(req, res) {
  res.json(req.user)
  res.redirect('/home');
});

app.use('/api', require('./api/index.js'));

var server = app.listen(process.env.PORT || 4000, function(){
  console.log("running on port", server.address().port);
});
