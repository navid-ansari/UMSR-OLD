const express = require("express");
const dotenv = require("dotenv");
//const mongoose = require('mongoose');

// mongo config
const mongoConfig = require("./config/db.config");

// controller config
// const controllerConfig = require('./config/controller.config');

const app = express();
dotenv.config();
app.use(express.json());

// disable HTTP request caching
app.set("etag", false);
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

// run mongo db config
const mongodb = mongoConfig();

// run controller config
// const controller = controllerConfig();

// api routes
const testController = require("./routes/test/testController");
const userlistController = require("./routes/userlist/userlistController");
const menuController = require("./routes/menu/menuController");
const signupController = require("./routes/signup/signupController");
const signinController = require("./routes/signin/signinController");
const viewController = require("./routes/view/viewController");
const deleteController = require("./routes/delete/deleteController");
const editController = require("./routes/edit/editController");
const updateController = require("./routes/update/updateController");

// use routes
app.use("/api/test", testController);
app.use("/api/userlist", userlistController);
app.use("/api/menu", menuController);
app.use("/api/signup", signupController);
app.use("/api/signin", signinController);
app.use("/api/view", viewController);
app.use("/api/delete", deleteController);
app.use("/api/edit", editController);
app.use("/api/update", updateController);

const PORT = process.env.PORT || 3200;
app.listen(PORT, console.log(`server started on port ${PORT}`));
