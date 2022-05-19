const express = require('express')
const router = express.Router()

// schema
//const UserList = require('../schema/details/details');
// const UserListSchema = require('../schema/userlist/UserList');
const UserSchema = require('../../schema/user/UserSchema')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

/*router.get("/", (req, res) => {
  // res.send('Details Homepage');
  UserDetail.find({}, (err, docs) => {
    if (!err) {
      console.log(docs);
      res.json(docs);
      console.log("Model Successful");
    } else {
      console.log("Failed to retrieve the Course List: " + err.message);
    }
  });
});*/

router.get('/allUser', (req, res) => {
    //res.send('All User Homepage');
    UserSchema.find({}, (err, users) => {
        if (err) {
            res.status(500).json({
                success: false,
                error: err,
                message: 'Error in Fetch All User Query.'
            })
        } else if (users.length == 0) {
            res.status(200).json({
                success: true,
                data: users,
                message: 'No Records Found'
            })
        } else if (users.length > 0) {
            res.status(200).json({
                success: true,
                data: users,
                message: 'User List.'
            })
        }
    })
})

module.exports = router
