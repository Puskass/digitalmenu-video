const express = require("express");
const path = require("path");
const mongoose = require('mongoose')
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const restaurantRoutes = require('./routes/restaurant.routes')
const menuRoutes = require('./routes/menu.routes')

app.use(restaurantRoutes)
app.use(menuRoutes)

const port = 5000;
mongoose.connect('mongodb://127.0.0.1:27017/digitalmenu-video').then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});

