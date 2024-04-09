const Restaurant = require("../models/Restaurant");
const { countries, currency } = require("../util/data");
const Menu = require("../models/Menu");


exports.postRestaurant = async (req, res) => {
  const { name, city, location, country, currency } = req.body;
  if (!name || !city || !location || !country || !currency) {
    return res.redirect("/restaurants/create");
  }
  await Restaurant.create({ name, city, location, country, currency });
  res.redirect("/restaurants");
};

exports.getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find();

  res.render("index", {
    pageTitle: "Digital Menu",
    path: "/restaurants",
    restaurants,
  });
};

exports.getRestaurant = async (req, res) => {
  const { restaurantid } = req.params;
  const restaurant = await Restaurant.findById(restaurantid);

  const menus = await Menu.find({restaurantid})

  res.render("restaurant-detail", {
    pageTitle: "Restoran",
    path: "/restaurants/:restaurantid/menus",
    restaurant,
    menus
  });
};

exports.getPostRestaurant = async (req, res) => {
  const restaurants = await Restaurant.find();
  res.render("add-restaurant", {
    pageTitle: "Add New Restaurant",
    path: "/restaurants/create",
    restaurants,
    countries,
    currency,
  });
};

exports.deleteRestaurant = async (req, res) => {
  const { restaurantid } = req.params;

  await Restaurant.deleteOne({ _id: restaurantid });
  res.redirect("/restaurants");
};