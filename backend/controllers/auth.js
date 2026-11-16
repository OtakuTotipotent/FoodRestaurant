const Joi = require("joi");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

const userSignupSchema = Joi.object({
  username: Joi.string().trim().min(3).max(30).required(),
  fullname: Joi.string().trim().max(30).required(),
  email: Joi.string().trim().email().lowercase().required(),
  password: Joi.string().pattern(passwordPattern).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

const authController = {
  async signup(req, res, next) {
    try {
      // 1. Validate input
      const { error, value } = userSignupSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      if (error) return next(error);

      const { username, fullname, email, password } = value;

      // 2. Check existing account
      const existingUser = await User.findOne({
        $or: [{ email }, { username }],
      });

      if (existingUser) {
        if (existingUser.username === username) {
          return res.status(409).json({
            message: "Username already exists.",
          });
        }
        return res.status(409).json({
          message: "Email already exists.",
        });
      }

      // 3. Hash password
      const hashedPassword = await bcrypt.hash(password, 12);

      // 4. Create user
      const user = await User.create({
        username,
        fullname,
        email,
        password: hashedPassword,
      });

      // 5. Send safe response
      return res.status(201).json({
        message: "Account created successfully.",
        user: {
          id: user._id,
          username: user.username,
          fullname: user.fullname,
          email: user.email,
          createdAt: user.createdAt,
        },
      });
    } catch (error) {
      return next(error);
    }
  },

  async login(req, res, next) {
    // Implement later
  },
};

module.exports = authController;
