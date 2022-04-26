const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//mongoose.Promise = global.Promise;
const AllUserListSchema = new Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  fullname: {
    type: String,
  },
  dob: {
    type: String,
  },
  role: {
    type: Array,
  }
});
//var SomeModel = mongoose.model('UMSR', ItemSchema);
// var UserDetails =  mongoose.model("Model", ItemSchema, "UMSR");
module.exports = mongoose.model("AllUserModel", AllUserListSchema, "USERS");
