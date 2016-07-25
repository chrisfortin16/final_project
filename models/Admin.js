// Admins models
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;
var adminSchema = new Schema({
  first_name: String,
  last_name: String,
  gender: String,
  email: String,
  password: String,
  street_address: String,
  postal_code: String,
  position: String,
  phone_number: String,
  date_created: Date
});

var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
