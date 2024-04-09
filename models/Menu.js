const mongoose = require("mongoose")
const { Schema } = mongoose

const menuSchema = new Schema ({
    title: String,
    description:String ,
    restaurantid: String,
    sections: {
        type: [mongoose.Schema.Types.Mixed],
      },

})

module.exports = mongoose.model("menus", menuSchema)