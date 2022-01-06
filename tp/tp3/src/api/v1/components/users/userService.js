const User = require('./userModel');

exports.createOne = async (data) => {
    const { firstName, lastName, email, password, phone, role } = data;
    const user = new User({
        firstName, 
        lastName,
        email,
        password,
        phone,
        role
    })

    const userCreated = await user.save();
    if(!userCreated) {
        throw new Error('User not created');
    }
    return userCreated;
}

exports.getAll = async () => {
    const users = await User.find({})
    return users;
}

exports.getOne = async (id) => {
    const user = await User.find({ _id: id })
    if(!user.length) {
        throw new Error('User not found');
    }
    return user;
}

exports.getOneByEmail = async (email) => {
    const user = await User.find({ email: email })
    if(user.length) {
        throw new Error('User found ',user);
    }
    return 'ok';
}

exports.updateOne = async (data) => {
    const user = await User.find({ _id: data._id })
    if(!user.length) {
        throw new Error('User not found');
    }
    return await User.findOneAndUpdate({_id: data._id}, data, {
        new:true
    })
}

exports.deleteOne = async (id) => {
    const user = await User.find({ _id: id })
    if(!user.length) {
        throw new Error('User not found');
    }

    await User.deleteOne({_id: id})
    return 'User deleted'
}