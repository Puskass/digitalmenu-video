const express = require("express");

const router = express.Router();

const {
  getRestaurants,
  postRestaurant,
  getRestaurant,
  getPostRestaurant,
  deleteRestaurant
} = require("../controllers/restaurants.controllers");

router.get("/", (req, res) => res.redirect("/restaurants"));

router.get("/restaurants", getRestaurants);

router.get('/restaurants/create', getPostRestaurant)

router.post("/restaurants/create", postRestaurant);

router.get("/restaurants/:restaurantid/menus", getRestaurant);

router.get("/restaurants/:restaurantid/delete", deleteRestaurant);

module.exports = router;
