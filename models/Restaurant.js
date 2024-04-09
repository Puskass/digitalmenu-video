const mongoose = require("mongoose");
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: String,
  city: String,
  location: String,
  country: String,
  currency: String
});

module.exports = mongoose.model("restaurants", restaurantSchema);
