const bcrypt = require("bcryptjs");
const userRepository = require("../repositories/auth.repository");
const jwt = require("jsonwebtoken");

const createUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return await userRepository.create({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashedPassword
  });
};

const findUserByEmail = async (data)=>{
  return await userRepository.findByEmail({
    email: data.email
  });
}

const checkPassword = async (user, password)=>{
  return await bcrypt.compare(password, user.password);
}

const generateToken = (user)=>{
  return jwt.sign(
    {
      id: user._id,
// MongoDB donne auto à chaque document un identifiant appelé _id
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn : "1h"
    }
  )
}

module.exports = {
  createUser,
  findUserByEmail,
  checkPassword,
  generateToken
};