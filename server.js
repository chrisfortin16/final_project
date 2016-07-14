var express = require('express');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var morgan = require('morgan');
var db = require('./db');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var Admin = require('./server/models/Admin.js');
var Customer = require('./server/models/Customer.js');
var Driver = require('./server/models/Drivers.js');
var Order = require('./server/models/Order.js');

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

db.createConnection(process.env.MONGODB_URI);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

// Define middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Passport init
app.use(require('express-session')({
    secret: 'keyboard cat',
    store: new MongoStore({ mongooseConnection: db.createConnection(process.env.MONGODB_URI)}),
    proxy: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
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
  console.log('Hello?')
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
