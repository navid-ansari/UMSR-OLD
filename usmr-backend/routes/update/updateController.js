const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// schema
const User = require("../../schema/user/UserSchema");

router.use((req, res, next) => {
  console.log("Update Controller: ", Date.now());
  next();
});

router.put("/", (req, res) => {
  const id = req.query.id;
  console.log(id);
  console.log(req.body);
  //res.send('Update API');
  // updateOne() => bulk update and returns modified properties in response
  //findByIdAndUpdate() => single row update and return complete modified object in response

  User.findByIdAndUpdate(id, {...req.body}, function (error, user) {
    if (error) {
      res.status(500).json({
        success: false,
        error: error,
        message: "Error in Update User Query.",
      });
    } else {
      if (user) {
        res.status(200).json({
          success: true,
          data: user,
          message: "User Successfully Updated.",
        });
      }
    }
  });
});

module.exports = router;
