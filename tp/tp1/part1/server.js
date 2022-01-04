const express = require('express')
const app = express()
const port = 3000

app.get('/ping', (req, res) => {
  res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify('pong'))
})

app.listen(port, () => {
    console.log(`Le serveur écoute à l'adresse : http://localhost:${port}`)
})