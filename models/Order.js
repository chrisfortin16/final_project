// Order model
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;
var orderSchema = new Schema({
  firstname: String,
  lastname: String,
  phone: Number,
  address: String,
  zip: Number,
  orderType: String,
  needby: Date,
  amount: String,
  amountType: String,
  payment: String,
  maintenance: String,
  message: String,
  username: String,
  timestampCreated: String,
  uuid: String
});

var Order = mongoose.model('Order', orderSchema);

module.exports = Order;
