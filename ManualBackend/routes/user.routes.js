const {
  createUser,
  getUsers,
  deleteUsers,
} = require("../controllers/user.controllers");

function userRoutes(req, res) {
  if (req.registerUser === "SignUP") {
    if (req.method === "POST" && req.path === "/users") {
      return createUser(req, res);
    }
  }

  if (req.method === "GET" && req.path === "/users") {
    return getUsers(req, res);
  }

  if (req.method === "DELETE" && req.path === "/users") {
    return deleteUsers(req, res);
  }
}

module.exports = userRoutes;
