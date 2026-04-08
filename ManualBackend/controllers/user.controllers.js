const User = require("../models/user.model");

exports.createUser = (req, res) => {
  console.log("Controller: createUser");

  const user = User.create(req.body);
  res.send(user);
};

exports.getUsers = (req, res) => {
  console.log("Controller: getUsers");

  const users = User.findAll();
  res.send(users);
};

exports.deleteUsers = (req, res) => {
  console.log("Controller: deleteUsers");

  const users = User.delete();
  res.send(users);
};
