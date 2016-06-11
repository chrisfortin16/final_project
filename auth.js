var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Admin = require('./server/models/admin.js');

passport.use('login', new LocalStrategy({
 usernameField: 'email',
 passwordField: 'password',
 passReqToCallback: true
},
function(req, email, password, done){
 process.nextTick(function() {
   Admin.findOne({'email': email, 'password': password}, function(err, Admin){
     if(Admin)
       return done(null, Admin);
     if(err)
       return err;
     return false;
   });
 });
}
));

passport.serializeUser(function(Admin, done) {
   done(null, Admin);
});

passport.deserializeUser(function(Admin, done) {
   done(null, Admin);
});

module.exports = passport;
