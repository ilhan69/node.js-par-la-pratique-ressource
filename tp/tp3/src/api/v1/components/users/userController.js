const userModel = require('./userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({})
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send('Error');
    }
}

exports.getUserById = async (req,res) => {
    try {
        const user = await userModel.find({ id: req.params.userId })
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send('Error');
    }
}

exports.createUser = async (req,res) => {
    try {
        let lastUser = await this.getLastInsertedUser();
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
        let createdUser = await userModel.create(newUser)
        return res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify(createdUser))
    } catch (error) {
        return res.status(500).send('Error');
    }
}

exports.updateUserById = async (req, res) => {
    try {
        let userUpdated = await userModel.find({ id: req.params.userId })
        if(!userUpdated.length) {
            return res.status(500).send({message:'Error user not found'})
        }
        userUpdated = {
            firstName: req.body.firstName ?? userUpdated.firstName,
            lastName: req.body.lastName ?? userUpdated.lastName,
            email: req.body.email ?? userUpdated.email,
            password: req.body.password ?? userUpdated.password,
            phone: req.body.phone ?? userUpdated.phone,
            creationDate: userUpdated.creationDate,
            role: req.body.role ?? userUpdated.role,
        }
        userUpdated = await userModel.findOneAndUpdate({id: req.params.userId}, userUpdated, {
            new:true
        })
        return res.status(200).send({message:'Success! User updated', userUpdated})
    } catch (error) {
        return res.status(500).send('Error');
    }
}

exports.deleteUserById = async (req,res) => {
    try {
        if(!req.params.userId) {
            return res.status(500).send({message:'Error user id not specified'})
        }
        return res.status(200).send({message: await userModel.deleteOne({id: req.params.userId})})   
    } catch (error) {
        return res.status(500).send('Error');
    }
}

exports.getLastInsertedUser = async () => {
    try {
        return await userModel.find({ id: {$ne:null} }).sort({ _id: -1 }).limit(1)   
    } catch (error) {
        return res.status(500).send('Error');
    }
}