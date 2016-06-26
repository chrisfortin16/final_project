var express = require('express');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var morgan = require('morgan');
var db = require('./db');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var Admin = require('./server/models/admin.js');
var Customer = require('./server/models/customer.js');
var Driver = require('./server/models/drivers.js');

passport.use('login', new LocalStrategy({
 usernameField: 'email',
 passwordField: 'password',
 passReqToCallback: true
},
function(req, email, password, done){
 process.nextTick(function() {
   Admin.findOne({'email': email, 'password': password}, function(err, admin){
     if(admin)
       return done(null, admin);
     if(err)
       return err;
     return false;
   });
 });
}
));

passport.serializeUser(function(admin, done) {
    done(null, admin);
});

passport.deserializeUser(function(admin, done) {
    done(null, admin);
});

// Init App
var app = express();

mongoose.createConnection('mongodb://localhost/DMSDB');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

// Redirects admin to homepage if they are authenticated
// app.get('/home', isLoggedIn, function(req, res) {
//   res.render('./client/partials/home.html', {
//     admin : req.admin
//   });
// });

// Define middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Passport init
app.use(require('express-session')({
    secret: 'keyboard cat',
    store: new MongoStore({ mongooseConnection: mongoose.createConnection('mongodb://localhost/DMSDB/sessions')}),
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Set Static Folder
app.use(express.static('client'));

app.get('/logout', function(req, res) {
  req.logout();
  res.send(200);
});

app.post('/api/login', passport.authenticate('login'), function(req, res) {
  res.json(req.session)
});

app.use('/api', require('./api/index.js'));

// Get client folder
app.get('*', function(req, res, next){
  res.sendFile(__dirname + "/client/index.html");
});

var server = app.listen(process.env.PORT || 4000, function(){
  console.log("running on port", server.address().port);
});
