const express = require('express')
const app = express()
const morgan = require('morgan');

const mongoose = require('./db');
const userController = require('./userController');

app.use(express.json())
app.use(morgan('dev'))

app.listen(3000, () => {
    console.log(`Le serveur écoute à l'adresse : http://localhost:3000`)
})

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Welcome on rest API'}))
})

app.route('/users/:userId?')
  .get(async function(req, res) {
      if(req.params.userId) {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify(await userController.getUserById(req.params.userId)))
        return;
      } else {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify(await userController.getAllUsers()))
        return;
      }
  })
  .post(async function(req, res) {
      let lastUser = await userController.getLastInsertedUser();
      let newUser = {
        id: (lastUser.length ? lastUser[0].id : 0) + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        creationDate: new Date(),
        role: req.body.role,
      }
      userController.create(newUser)
      res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Success, user created', newUser}))
      return;
  })
  .put(async function(req, res) {
    if(!req.params.userId) {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Error, User id not specified !'}))
        return;
    }
    let userUpdated = await userController.getUserById(req.params.userId)
    if(!userUpdated.length) {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Error, User id not found !'}))
        return;
    }
    userUpdated = {
        id: req.params.userId,
        firstName: req.body.firstName ?? userUpdated.firstName,
        lastName: req.body.lastName ?? userUpdated.lastName,
        email: req.body.email ?? userUpdated.email,
        password: req.body.password ?? userUpdated.password,
        phone: req.body.phone ?? userUpdated.phone,
        creationDate: userUpdated.creationDate,
        role: req.body.role ?? userUpdated.role,
    }
    userUpdated = await userController.updateUserById(req.params.userId, userUpdated);

    res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Success! User updated', userUpdated}))
  })
  .delete(async function(req, res) {
    if(!req.params.userId) {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Error, User id not specified !'}))
        return;
    }
    let userUpdated = await userController.getUserById(req.params.userId)
    if(!userUpdated.length) {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Error, User id not found !'}))
        return;
    }
    let response = await userController.deleteUserById(req.params.userId)
    res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Success! '+response.deletedCount+' user deleted'}))
  });