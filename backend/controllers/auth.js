const Joi = require("joi");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const UserDTO = require("../utils/userDTO");
const JWTService = require("../services/JWT");
const RefreshToken = require("../models/token");

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

const authController = {
  // Signup
  async signup(req, res, next) {
    try {
      // Validate input
      const userSignupSchema = Joi.object({
        username: Joi.string().trim().lowercase().min(3).max(30).required(),
        fullname: Joi.string().trim().max(30).required(),
        email: Joi.string().trim().email().lowercase().required(),
        password: Joi.string().pattern(passwordPattern).required(),
        confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
        role: Joi.forbidden(),
      });

      const { error, value } = userSignupSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      if (error) return next(error);

      const { username, fullname, email, password } = value;

      // Check existing account
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

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 12);

      // Create user
      const user = await User.create({
        username,
        fullname,
        email,
        password: hashedPassword,
      });

      // Generate Token
      const accessToken = JWTService.signAccessToken({ _id: user._id }, "30m");
      const refreshToken = JWTService.signRefreshToken(
        {
          _id: user._id,
        },
        "60m",
      );

      await JWTService.storeRefreshToken(refreshToken, user._id);

      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 30,
        httpOnly: true,
        sameSite: "lax",
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        sameSite: "lax",
      });

      // Send safe response
      const userDto = new UserDTO(user);
      return res.status(201).json({
        message: "Account created successfully.",
        user: userDto,
        auth: true,
      });

      // Error handling
    } catch (error) {
      return next(error);
    }
  },

  // Signin
  async signin(req, res, next) {
    try {
      // Validate input
      const userSigninSchema = Joi.object({
        username: Joi.string().trim().min(3).max(30).required(),
        password: Joi.string().pattern(passwordPattern).required(),
      });

      const { error, value } = userSigninSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      if (error) return next(error);

      // Check credentials
      const { username, password } = value;
      const user = await User.findOne({ username });
      if (!user) {
        const error = {
          status: 401,
          message: "Username does not exist!",
        };

        return next(error);
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        const error = {
          status: 401,
          message: "Wrong password!",
        };
        return next(error);
      }

      // Generate Token
      const accessToken = JWTService.signAccessToken({ _id: user._id }, "30m");
      const refreshToken = JWTService.signRefreshToken(
        { _id: user._id },
        "60m",
      );

      await RefreshToken.updateOne(
        { userId: user._id },
        { token: refreshToken },
        { upsert: true },
      );

      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 30,
        httpOnly: true,
        sameSite: "lax",
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        sameSite: "lax",
      });

      // Send safe response
      const userDto = new UserDTO(user);
      return res.status(200).json({
        message: "Account signin successfully.",
        user: userDto,
        auth: true,
      });
    } catch (error) {
      return next(error);
    }
  },

  // Signout
  async signout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      await RefreshToken.deleteOne({ token: refreshToken });

      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");

      res.status(200).json({
        message: "Account signout successful",
        user: null,
        auth: false,
      });
    } catch (error) {
      return next(error);
    }
  },

  // Refresh
  async refresh(req, res, next) {
    try {
      // Get token from cookies
      const ogRefreshToken = req.cookies.refreshToken;

      if (!ogRefreshToken) {
        const error = {
          status: 401,
          message: "Unauthorized",
        };

        return next(error);
      }

      // Verify token
      const verifiedRefreshToken =
        JWTService.verifyRefreshToken(ogRefreshToken);

      if (!verifiedRefreshToken) {
        const error = {
          status: 401,
          message: "Unauthorized",
        };
        return next(error);
      }

      // Check user credibility
      const id = verifiedRefreshToken._id;

      const match = await RefreshToken.findOne({
        userId: id,
        token: ogRefreshToken,
      });

      if (!match) {
        const error = {
          status: 401,
          message: "Unauthorized",
        };
        return next(error);
      }

      // Generate new token
      const accessToken = JWTService.signAccessToken({ _id: id }, "30m");
      const refreshToken = JWTService.signRefreshToken({ _id: id }, "60m");

      // Update database
      await RefreshToken.updateOne(
        { userId: id, token: ogRefreshToken },
        { $set: { token: refreshToken } },
      );

      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 30,
        httpOnly: true,
        sameSite: "lax",
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        sameSite: "lax",
      });

      // Return safe response
      const user = await User.findOne({ _id: id });
      const userDto = new UserDTO(user);

      return res.status(200).json({
        message: "Account token refreshed!",
        user: userDto,
        auth: true,
      });
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = authController;
