const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

// schema
const signupSchema = require('../../schema/signup/SignUpSchema')

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.post('/', (req, res) => {
  console.log(req.body)
  var user = new signupSchema({ ...req.body })
  user.save(function (error, user) {
    if (error) {
      res.status(500).json({
        success: false,
        error: error,
        message: 'Error in Sign Up Query.'
      })
    } else {
      res.status(200).json({
        success: true,
        data: user,
        message: 'User Saved Successfully.'
      })
    }
  })
})

module.exports = router
