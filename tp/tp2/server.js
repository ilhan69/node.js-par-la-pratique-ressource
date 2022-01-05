require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
module.exports = app = express()

const config = require('./src/config/env.config')

app.use(express.json())
app.use(morgan(config.format_logs))

app.listen(config.port, () => {
    console.log(`Le serveur écoute à l'adresse : http://localhost:${config.port} en mode ${config.node_env}`)
})

require('./src/api/v1/routes.js');

app.use(function(req, res, next) {
  res.status(404);
});