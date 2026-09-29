const bcrypt = require("bcryptjs");
const userRepository = require("../repositories/user.repository");

const createUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return await userRepository.create({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashedPassword
  });
};

module.exports = {
  createUser
};