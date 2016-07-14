var mongoose = require('mongoose');

// Connect to the database
mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose;
