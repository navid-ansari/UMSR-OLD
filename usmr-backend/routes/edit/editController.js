const express = require("express");
const router = express.Router();

// schema
const User = require("../../schema/user/UserSchema");

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  const id = req.query.id;
  User.findById(id, function (error, user) {
    if (error) {
      res
        .status(500)
        .json({
          success: false,
          error: error,
          message: "Error in Edit User Query.",
        });
    } else {
      if (user) {
        res
          .status(200)
          .json({
            success: true,
            data: user,
            message: "User Successfully Updated.",
          });
      } else {
        res
          .status(200)
          .json({ success: true, data: user, message: "User Not Found" });
      }
    }
  });
});

module.exports = router;
