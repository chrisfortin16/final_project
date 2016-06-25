var express = require('express');
var passport = require('passport');
var router = require('express').Router();
var bodyParser = require('body-parser');

var Admin = require('../server/models/admin.js');
var Driver = require('../server/models/drivers.js');
var Customer = require('../server/models/customer.js');

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
  console.log(req.session.passport.admin._id);
  Admin.find({adminId : req.session.passport.admin._id}, function(err, data) {
    res.json({
      data: data,
      sessions : req.session
    });
  })
});

router.get('/admins', function (req, res, next) {
  Admin.find()
  .sort('date_created')
  .exec(function (err, admins) {
    if (err) { next(err) }
    res.json(admins)
  })
});

router.get('/drivers', function (req, res, next) {
  Driver.find()
  .sort('date_created')
  .exec(function (err, drivers) {
    if (err) { next(err) }
    console.log('drivers:', drivers);
    res.json(drivers)
  })
});

router.get('/customers', function (req, res, next) {
  Customer.find()
  .sort('last_name')
  .exec(function (err, customers) {
    if (err) { next(err) }
    res.json(customers)
  })
});


module.exports = router;
