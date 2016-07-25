// Customers models
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;
var customerSchema = new Schema({
  _id: String,
  uuid : String,
  gender : String,
  first_name : String,
	last_name : String,
  email: String,
  password: String,
  phone_number: String,
  street_address: String,
  postal_code: String,
  date_created: String,
  same_day_delivery: Boolean,
  date_of_delivery: String,
  date_created: String,
  message: String
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
