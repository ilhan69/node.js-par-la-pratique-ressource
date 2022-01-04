const express = require('express')
let pingAllPorts = require('./sniffer')
const app = express()
const port_min = 3000;
const port_max = 4000;

const port = Math.floor(Math.random()*(port_max-port_min+1)+port_min);

app.get('/ping', (req, res) => {
  res.setHeader('Content-Type', 'application/json').status(200).send('pong')
})

app.listen(port, () => {
    console.log(`Le serveur écoute à l'adresse : http://localhost:${port}`)
})

pingAllPorts().then((data) => {
    console.log('Le sniffer a détecté le port : '+ data);
})