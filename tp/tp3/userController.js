const userModel = require('./userModel');

exports.getAllUsers = async () => {
    return await userModel.find({}).exec()
}

exports.getUserById = async (id) => {
    return await userModel.find({ id: id }).exec()
}

exports.create = async (newUser) => {
    return await userModel.create(newUser)
}

exports.updateUserById = async (id, data) => {
    return await userModel.findOneAndUpdate({id: id}, data, {
        new:true
    })
}

exports.deleteUserById = async (id) => {
    return await userModel.deleteOne({id: id});
}

exports.getLastInsertedUser = async () => {
    return await userModel.find().sort({ _id: -1 }).limit(1)
}