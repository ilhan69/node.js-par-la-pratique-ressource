const app = require('../../../server.js')
const config = require('../../config/env.config')
const apiController = require(`./apiController`)

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Welcome on rest API'}))
})
  
app.route(config.root_api+'users/:userId?')
.get(function(req, res) {
    if(req.params.userId) {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify(apiController.getUserById(req.params.userId)))
        return;
    } else {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify(apiController.getAllUsers()))
        return;
    }
})
.post(function(req, res) {
    res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify(apiController.createUser(req)))
    return;
})
.put(function(req, res) {
    res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify(apiController.updateUserById(req)))
})
.delete(function(req, res) {
    res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify(apiController.deleteUserById(req)))
});