const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    // Authentication
    if (!req.user) {
      return next({
        status: 401,
        message: "Unauthorized",
      });
    }

    // Authorization
    if (!allowedRoles.includes(req.user.role)) {
      return next({
        status: 403,
        message: "Forbidden: insufficient permissions.",
      });
    }

    next();
  };
};

module.exports = authorize;
