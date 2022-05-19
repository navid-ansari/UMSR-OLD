const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

// schema
const signInSchema = require('../../schema/signin/SignInSchema')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.post('/', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    console.log(req.body)

    // .find() always returns array of objects, either with records or blank
    // .findOne() always return a single object

    signInSchema.findOne({ email }, (err, user) => {
        if (err) {
            res.status(500).json({
                success: false,
                error: err,
                message: 'Error executing the query.'
            })
        }
        if (!user) {
            res.status(200).json({
                success: false,
                data: user,
                message: 'User not found'
            })
        }
        if (user) {
            if (password !== user.password) {
                res.status(200).json({
                    success: false,
                    data: user,
                    message: 'Username or Password is incorrect.'
                })
            } else {
                res.status(200).json({
                    success: true,
                    data: user,
                    message: 'User Logged In.'
                })
            }
        }
    })
})

module.exports = router
