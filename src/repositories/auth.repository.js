const User = require("../models/User");

const create = async (data)=>{
    return await User.create(data);
}

const findByEmail = async (email)=>{
    return await User.findOne({email});
    // { email: "ayoub@gmail.com" }
    // { email } est une écriture raccourcie de { email: email }
}

module.exports = {
    create,
    findByEmail
}