const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// schema
const signupSchema = require("../../schema/signup/SignUpSchema");

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/:id", (req, res) => {
  //res.send("Delete API");
  signupSchema.findByIdAndDelete({_id: req.params.id}, (err, user) => {
    if(err) {
      res.status(500).json({message: "Error in deleting user.", success: false});
    } else if(user){
      res.status(200).json({message: "User successfully deleted.", success: true, data: user});
    } else {
      res.status(200).json({message: "User not found.", success: false, data: user});
    }
  })

 /*const note = await signupSchema.findById(req.params.id);
  if(note) {
      await note.remove((error, success) => {

      });
      res.status(200).json({message: "User successfully deleted.", success: true});
  }*/
  // var user = new signupSchema({_id: req.params.id});
  /*user.findByIdAndRemove({}, function (err, user) {
    if(!err) {
        res.status(200).json({message: "User successfully deleted.", success: true});
    } else {
        res.status(500).json({message: "Error in deleting user.", success: false});
    }
  })*/
});

module.exports = router;
