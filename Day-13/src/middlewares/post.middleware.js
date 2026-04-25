const jwt = require("jsonwebtoken");

async function identifyUser(req, res, next) {

  const token = req.cookies.token;
  let decoded = null;

  if (!token) {
    return res.status(401).json({
      message: "UnAuthorized Access",
    });
  }

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }

  req.user = decoded
  next();
}

module.exports = identifyUser;  
