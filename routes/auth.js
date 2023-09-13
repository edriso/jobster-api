const express = require("express");
const { rateLimit } = require("express-rate-limit");
const { register, login, updateUser } = require("../controllers/auth");
const authenticateUser = require("../middleware/authentication");
const testUser = require("../middleware/testUser");
const router = express.Router();
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100, // Limit each IP to 100 requests per 15 minutes
  message:
    "Too many accounts created from this IP, please try again after 15 minutes",
  standardHeaders: "draft-7",
});

router.post("/register", apiLimiter, register);
router.post("/login", apiLimiter, login);
router.patch("/updateUser", authenticateUser, testUser, updateUser);

module.exports = router;
