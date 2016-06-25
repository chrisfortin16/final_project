// Employee models
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;
var driverSchema = new Schema({
  _id: String,
  uuid : String,
  gender : String,
  first_name : String,
	last_name : String,
  email: String,
  password: String,
  street_address: String,
  postal_code: String,
  date_created: String,
  deliveries_made: String,
  orders_todo: String
});

var Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
