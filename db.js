var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost/DMSDB');

module.exports = mongoose.connection;
