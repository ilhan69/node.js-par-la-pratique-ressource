const mongoose = require('mongoose');
const config = require('./env.config');

mongoose.connect(`${config.db_dialect}://${config.db_user}:${config.db_password}@${config.db_host}:${config.db_port}/${config.db_name}`, 
{ useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error during database connection'))
db.once('open', () => {
    console.log('Connected to database.')
})

module.exports = mongoose;