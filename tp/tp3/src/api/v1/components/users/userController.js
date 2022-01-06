const userModel = require('./userModel');
const userService = require('./userService')

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAll()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json('Error');
    }
}

exports.getUserById = async (req,res) => {
    try {
        const user = await userService.getOne(req.params.userId)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json('User not found');
    }
}

exports.createUser = async (req,res) => {

    try {
        const { email } = req.body.email;
        const data = req.body
        const userExists = await userService.getOneByEmail(data.email);
        const userCreated = await userService.createOne(data)
        return res.status(201).json(userCreated);       
    } catch (error) {
        return res.status(500).json('Error'); 
    }
}

exports.updateUserById = async (req, res) => {
    try {
        const user = await userService.updateOne({
            _id: req.params.userId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            role: req.body.role,
        })
        return res.status(200).json({message:'Success! User updated', user})
    } catch (error) {
        return res.status(500).json('Error');
    }
}

exports.deleteUserById = async (req,res) => {
    try {
        return res.status(200).json({message: await userService.deleteOne(req.params.userId)})   
    } catch (error) {
        console.log(error)
        return res.status(500).json('Error');
    }
}