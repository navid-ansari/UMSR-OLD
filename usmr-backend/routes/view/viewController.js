const express = require('express')
const router = express.Router()

// schema
const ViewSchema = require('../../schema/view/ViewSchema')
const User = require('../../schema/user/UserSchema')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    User.findById(id, (error, user) => {
        if (error) {
            res.json({
                success: false,
                data: user,
                error: error,
                message: 'Error in View User Query.'
            })
        } else {
            if (user) {
                res.status(200).json({
                    success: true,
                    data: user,
                    message: 'User Found.'
                })
            } else {
                res.status(200).json({
                    success: false,
                    data: user,
                    message: 'User Not Found.'
                })
            }
        }
    })
})

module.exports = router
