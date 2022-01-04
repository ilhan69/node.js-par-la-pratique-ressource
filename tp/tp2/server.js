const express = require('express')
const app = express()

const users = require('./UserData')

app.use(express.json())

app.listen(3000, () => {
    console.log(`Le serveur écoute à l'adresse : http://localhost:3000`)
})

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Welcome on rest API'}))
})

app.route('/users/:userId?')
  .get(function(req, res) {
      if(req.params.userId) {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify(users.find(u => u.id == req.params.userId) ?? 'User not found'))
        return;
      } else {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify(users))
        return;
      }
  })
  .post(function(req, res) {
      let newUser = {
        id: users[users.length-1].id+1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        creationDate: new Date(),
        role: req.body.role,
      }
      users.push(newUser)
      res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Success, user created', newUser}))
      return;
  })
  .put(function(req, res) {
    if(!req.params.userId) {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Error, User id not specified !'}))
        return;
    }
    let userUpdated = users.find(u => u.id == req.params.userId);
    if(!userUpdated) {
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
    let userUpdatedIndex = users.findIndex(u => u.id == req.params.userId);
    users[userUpdatedIndex] = userUpdated;
    res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Success! User updated', userUpdated}))
  })
  .delete(function(req, res) {
    if(!req.params.userId) {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Error, User id not specified !'}))
        return;
    }
    let userDeleteIndex;
    try {
        userDeleteIndex = users.findIndex(u => u.id == req.params.userId);   
    } catch (error) {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Error, User id not found !'}))
        return;
    }
    users[userDeleteIndex] = null;
    res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Success! User deleted'}))
  });