const mongoose = require("mongoose");
require("mongoose-double")(mongoose);

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  menuId: {
    type: Number
  },
  menuName: {
    type: String
  },
  manuLabel: {
    type: String
  },
  childMenu: {
    type: [],
  },
  menuPath: {
    type: String,
  }
});

module.exports = mongoose.model("MenuModel", MenuSchema, "NAV_MENU");
