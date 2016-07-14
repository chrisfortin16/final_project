var mongoose = require('mongoose');

// Connect to the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/DMSDB/');

module.exports = mongoose;
