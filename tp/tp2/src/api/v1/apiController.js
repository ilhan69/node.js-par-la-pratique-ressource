const users = require('./data/UserData')

exports.getUserById = (id) => {
    try {
        return users.find(u => u.id == id)
    } catch (error) {
        return {message:'Error, User id not found !'};
    }
}
exports.getAllUsers = () => {
    return users;
}
exports.createUser = (req) => {
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
    return {message:'Success, user created', newUser};
}
exports.updateUserById = (req) => {
    if(!req.params.userId) {
        return {message:'Error, User id not specified !'};
    }
    let userUpdated;
    try {
        userUpdated = users.find(u => u.id == req.params.userId);
    } catch (error) {
        return {message:'Error, User id not found !'};
    }
    if(!userUpdated) {
        return {message:'Error, User id not found !'};
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
    
    return {message:'Success! User updated', userUpdated};
}
exports.deleteUserById = (req) => {
    if(!req.params.userId) {
        return {message:'Error, User id not specified !'};
    }
    let userDeleteIndex;
    try {
        userDeleteIndex = users.findIndex(u => u.id == req.params.userId);   
    } catch (error) {
        return {message:'Error, User id not found !'};
    }
    users[userDeleteIndex] = null;
    return {message:'Success! User deleted'};
}