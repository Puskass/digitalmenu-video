const Menu = require("../models/Menu");
const Restaurant = require("../models/Restaurant");

exports.postMenus = async (req, res) => {
  const { restaurantid } = req.params;
  const { title } = req.body;
  
  if (!title) {
    return res.redirect(`/restaurants/${restaurantid}/menus`);
  }
  
  await Menu.create({ title, restaurantid });
  res.redirect(`/restaurants/${restaurantid}/menus`);
};

exports.getMenuById = async (req, res) => {
  const { restaurantid, menuid } = req.params;
  
  const restaurant = await Restaurant.findById(restaurantid);
  const menu = await Menu.findById(menuid);
  if (!menu) {
    return res.status(404).send("Menu not found");
  }
  
  const sections = menu.sections;

  res.render("menu-detail", {
    pageTitle: "Menu",
    menu,
    restaurant,
    sections,
  });
};

exports.deleteMenu = async (req, res) => {
  const { menuid, restaurantid } = req.params;

  await Menu.deleteOne({ _id: menuid });

  res.redirect(`/restaurants/${restaurantid}/menus`);
};
