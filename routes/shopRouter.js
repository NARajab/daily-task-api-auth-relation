const router = require("express").Router();

const Shop = require("../controller/shopController");
const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");

router.post(
  "/",
  autentikasi,
  checkRole("Owner"),
  Shop.createShop
);
router.patch(
  "/:id",
  autentikasi,
  checkRole("Owner"),
  Shop.updateShop
);
router.delete(
  "/:id",
  autentikasi,
  checkRole("Owner"),
  Shop.deleteShop
);

router.get("/", Shop.findShops);
router.get("/:id", Shop.findShopById);
module.exports = router;
