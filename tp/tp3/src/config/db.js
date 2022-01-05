const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tp3', 
{ useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;