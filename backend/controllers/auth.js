const Joi = require("joi");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

const authController = {
  async signup(req, res, next) {
    // 1. User input validation
    const userSignupSchema = Joi.object({
      username: Joi.string().min(3).max(30).required(),
      fullname: Joi.string().max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().pattern(password_pattern).required(),
      confirmPassword: Joi.valid(Joi.ref("password")).required(),
    });

    const { error } = userSignupSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    // User account existence checking
    const { username, fullname, email, password } = req.body;

    try {
      const existedEmail = await User.exists({ email });
      const existedUsername = await User.exists({ username });

      if (existedEmail) {
        const error = {
          status: 409,
          message: "Email already exists. Go for Login, or use other email!",
        };
        return next(error);
      }

      if (existedUsername) {
        const error = {
          status: 409,
          message:
            "Username already exists. Go for Login, or try other username!",
        };
        return next(error);
      }

      // Password hashing
      const hashedPassword = await bcrypt.hash(password, 10);

      // Store new user in database
      const newUser = new User({
        username,
        email,
        fullname,
        password: hashedPassword,
      });

      const user = await newUser.save();

      // Response sending
      return res.status(201).json({ user });
    } catch (error) {
      return next(error);
    }
  },

  async login() {},
};

module.exports = authController;
