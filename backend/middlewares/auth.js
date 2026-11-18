const JWTService = require("../services/JWT");
const User = require("../models/user");
const UserDTO = require("../utils/userDTO");

const auth = async (req, res, next) => {
  // To verify the access token and identify the user
  try {
    // Validate tokens
    const { accessToken } = req.cookies;

    if (!accessToken) {
      return next({
        status: 401,
        message: "Unauthorized",
      });
    }

    // Get user
    const { _id } = JWTService.verifyAccessToken(accessToken);

    const user = await User.findById(_id);
    if (!user) {
      return next({
        status: 401,
        message: "Unauthorized",
      });
    }

    const userDto = new UserDTO(user);

    req.user = userDto;

    next();

    // Error handling
  } catch (error) {
    return next(error);
  }
};

module.exports = auth;
