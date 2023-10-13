const router = require("express").Router();

const User = require("../controller/userController");
const autentikasi = require("../middlewares/authenticate");
const checkOwnership = require("../middlewares/checkOwnership");

router.post("/", User.createUser);
router.get("/", User.findUsers);
router.patch("/:id", User.updateUser);
router.delete("/:id", User.deleteUser);
router.get(
  "/:id",
  autentikasi,
  checkOwnership,
  User.findUserById
);

module.exports = router;
