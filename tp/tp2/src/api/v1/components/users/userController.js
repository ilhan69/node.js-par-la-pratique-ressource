const users = require('../users/UserData')

exports.getAllUsers = (req, res) => {
    return res.status(200).send(users)
}

exports.getUserById = (req,res) => {
    try {
        let user = users.find(u => u.id == req.params.userId)
        if(user) {
            return res.status(200).send(user)
        }
        return res.status(404).send('User not found')
    } catch (error) {
        return res.status(500).send('Error');
    }
}

exports.createUser = (req,res) => {
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
    return res.status(200).send({message:'Success, user created', newUser})
}

exports.updateUserById = (req, res) => {
    let userUpdated;
    try {
        userUpdated = users.find(u => u.id == req.params.userId);
    } catch (error) {
        return res.status(500).send({message:'Error'})
    }
    if(!userUpdated) {
        return res.status(500).send({message:'Error user not found'})
    }
    userUpdated = {
        id: userUpdated.id,
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
    return res.status(200).send({message:'Success! User updated', userUpdated})
}

exports.deleteUserById = (req,res) => {
    let userDeleteIndex;
    try {
        userDeleteIndex = users.findIndex(u => u.id == req.params.userId); 
    } catch (error) {
        return res.status(500).send('Error, user not found');
    }
    users[userDeleteIndex] = null;
    return res.status(200).send({message: 'User deleted'}) 
}