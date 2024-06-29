require("dotenv").config();
const jwt = require('jsonwebtoken');
const UserModel = require('../models/Users');

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  console.log("Token found in cookies:", token);
  if (!token) {
    console.log("No token found in cookies");
    return res.status(401).json({ status: false, message: "Unauthorized: No token provided" });
  }

  try {
    console.log("Verifying token");
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Decoded token:", decodedToken);
    const user = await UserModel.findOne({ _id: decodedToken.id });
    if (!user) {
      console.log("No user found with decoded token ID");
      return res.status(404).json({ status: false, message: "User not found" });
    }
    req.user = user; // Attach user to request object
    next(); // Proceed to next middleware or request handler
  } catch (error) {
    console.error("Error verifying token:", error);
    // Improved error handling
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ status: false, message: "Token expired" });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(400).json({ status: false, message: "Invalid token" });
    } else {
      return res.status(500).json({ status: false, message: "Failed to authenticate token" });
    }
  }
};