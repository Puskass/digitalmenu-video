const express = require("express");

const router = express.Router();

const {
  postMenus,
  getMenuById,
  deleteMenu,
} = require("../controllers/menus.controllers");

router.post("/restaurants/:restaurantid/menus", postMenus);
router.get("/restaurants/:restaurantid/menus/:menuid", getMenuById);
router.get("/restaurants/:restaurantid/menus/:menuid/delete", deleteMenu);

module.exports = router;