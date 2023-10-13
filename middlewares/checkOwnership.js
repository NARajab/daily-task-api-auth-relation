const { User, Shop } = require("../models");
const ApiError = require("../utils/apiError");

const checkOwnership = async (req, res, next) => {
  try {
  } catch (error) {
    return next(new ApiError(err.message, 500));
  }
};

module.exports = checkOwnership;
