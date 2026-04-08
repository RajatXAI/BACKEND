const userRoutes = require("./routes/user.routes");
const logger = require("./middleware/logger.middleware");
let prompt = require("prompt-sync")();

let registerUser = prompt("SignUP/Login/Check -> ");
let name, email, password, method;
if (registerUser === "SignUP") {
  method = "POST";
  console.log(`User raise ${registerUser} request`);
  name = prompt("Enter your name : ");
  email = prompt("Enter your email : ");
  password = prompt("Enter your password : ");
} else {
  method = prompt("Enter methods such as GET, DELETE : ");
}

// Fake req
const req = {
  registerUser: registerUser,
  method: method,
  path: "/users",
  body: {
    name: name,
    email: email,
    password: password,
  },
};

// Fake res
const res = {
  send: (data) => console.log("Response:", data),
};

// Middleware + Route flow
function handleRequest(req, res) {
  logger(req, res, () => {
    userRoutes(req, res);
  });
}

// Run
handleRequest(req, res);
