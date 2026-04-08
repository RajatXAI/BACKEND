const { data, saveData } = require("../config/database");

const UserModel = {
  create: (user) => {
    const newUser = { id: Date.now(), ...user };
    data.users.push(newUser);

    saveData(); 
    return newUser;
  },

  findAll: () => {
    return data.users;
  },

  delete: () => {

    const deleteUsers = UserModel.create.newUser
    data.users.pop(deleteUsers)
    saveData()
    return deleteUsers
  }
};

module.exports = UserModel;