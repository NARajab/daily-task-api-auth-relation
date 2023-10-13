const { User, Shop } = require("../models");
const ApiError = require("../utils/apiError");

const createUser = async (req, res, next) => {
  const { name, age, address, role, shopId } =
    req.body;
  console.log(req.body);
  try {
    const newUser = await User.create({
      name,
      age,
      address,
      role,
      shopId,
    });
    res.status(200).json({
      status: "success",
      data: newUser,
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: Shop,
    });

    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findUserById = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      data: {
        user,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const updateUser = async (req, res, next) => {
  const { name, age, address, role } = req.body;
  try {
    const user = await User.update(
      {
        name,
        age,
        address,
        role,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      status: "Success",
      message: "sukses update user",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const deleteUser = async (req, res, next) => {
  const { name, age, address, role } = req.body;
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!user) {
      return next(
        new ApiError(
          "Product dengan ID tersebut tidak ditemukan",
          404
        )
      );
    }

    await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      message:
        "User dengan ID " +
        req.params.id +
        " telah dihapus",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  createUser,
  findUsers,
  findUserById,
  updateUser,
  deleteUser,
};
