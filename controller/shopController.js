const { Product, Shop } = require("../models");
const ApiError = require("../utils/apiError");

const createShop = async (req, res, next) => {
  const { name } = req.body;
  try {
    const newShop = await Shop.create({
      name,
    });
    res.status(200).json({
      status: "success",
      data: newShop,
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findShops = async (req, res, next) => {
  try {
    const shops = await Shop.findAll({
      include: ["Product"],
    });

    res.status(200).json({
      status: "success",
      data: shops,
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findShopById = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      data: {
        shop,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const updateShop = async (req, res, next) => {
  const { name } = req.body;
  try {
    const shop = await Shop.update(
      {
        name,
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

const deleteShop = async (req, res, next) => {
  const { name } = req.body;
  try {
    const shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!shop) {
      return next(
        new ApiError(
          "Toko dengan ID tersebut tidak ditemukan",
          404
        )
      );
    }

    await Shop.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      message:
        "Toko dengan ID " +
        req.params.id +
        " telah dihapus",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  createShop,
  findShops,
  findShopById,
  updateShop,
  deleteShop,
};
