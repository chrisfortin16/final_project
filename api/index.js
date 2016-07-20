var express = require('express');
var passport = require('passport');
var router = require('express').Router();
var bodyParser = require('body-parser');

var Admin = require('../models/Admin.js');
var Driver = require('../models/Drivers.js');
var Customer = require('../models/Customer.js');
var Order = require('../models/Order.js');

router.post('/register', function(req, res) {
  var admin = new Admin({
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    street_address: req.body.street_address,
    postal_code: req.body.postal_code,
    phone_number: req.body.phone_number,
    position: req.body.position,
    date_created: req.body.date_created
  });
  admin.save(function(err){
    if(err) throw err;
    console.log('new admin saved successfully');
  });
});

//authenticate login
router.get('/home', function(req, res) {
  console.log("loggedin admin id", req.session.passport.user._id);
   Admin.findOne({_id : req.session.passport.user._id}, function(err, data) {
    res.json({
      admindata: data,
      sessiondata : req.session
    });
   })
});

router.get('/myaccount', function(req, res) {
  Admin.find({_id: req.session.passport.admin._id},function (err, foundAdmin) {
    res.json({
      sessionData: reg.session
    });
  })
});

router.post('/updateAdmin', function(req, res) {
  Admin.findOneAndUpdate({_id : req.body._id}, {$set:{_id: req.session.passport.admin._id, email: req.body.email, password: req.body.password, first_name: req.body.first_name, last_name: req.body.last_name, street_address: req.body.street_address, postal_code: req.body.postal_code, phone_number: req.body.phone_number}}, {new: true}, function(err, data) {
    if(err) { console.log("error here", err); }
    console.log("data updated", data);
  })
});

router.get('/admins', function (req, res, next) {
  Admin.find()
  .sort('date_created')
  .exec(function (err, admins) {
    if (err) { return next(err); }
    res.json(admins)
  })
});

router.get('/drivers', function (req, res, next) {
  Driver.find()
  .sort('date_created')
  .exec(function (err, drivers) {
    if (err) { return next(err); }
    res.json(drivers)
  })
});

router.get('/customers', function (req, res, next) {
  Customer.find()
  .sort('last_name')
  .exec(function (err, customers) {
    if (err) { return next(err); }
    res.json(customers)
  })
});

router.get('/orders', function (req, res, next) {
  Order.find()
  .sort('_id')
  .exec(function (err, orders) {
    if (err) { return next(err); }
    res.json(orders)
  })
});


module.exports = router;
