const User = require("../models/User");

const create = async (data)=>{
    return await User.create(data);
}

const findByEmail = async(data)=>{
    return await User.findOne(data);
}

module.exports = {
    create,
    findByEmail
}