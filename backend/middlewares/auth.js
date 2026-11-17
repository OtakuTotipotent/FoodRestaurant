const JWTService = require("../services/JWT");
const User = require("../models/user");
const UserDTO = require("../utils/userDTO");

const auth = async (req, res, next) => {
  try {
    // Validate tokens
    const { refreshToken, accessToken } = req.cookies;

    if (!refreshToken || !accessToken) {
      const error = {
        status: 401,
        message: "Unauthorized",
      };

      return next(error);
    }

    // Get user
    const { _id } = JWTService.verifyAccessToken(accessToken);

    const user = await User.findOne({ _id: _id });

    const userDto = new UserDTO(user);

    req.user = userDto;

    next();

    // Error handling
  } catch (error) {
    return next(error);
  }
};

module.exports = auth;
