const express = require('express')
const router = express.Router()

// schema
const MenuSchema = require('../../schema/menu/MenuSchema')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    // res.send('Menu Homepage');
    MenuSchema.find({}, (error, menu) => {
        if (error) {
            res.status(500).json({
                success: false,
                error: error,
                message: 'Error in Menu Query.'
            })
        } else {
            res.status(200).json({
                success: true,
                data: menu,
                message: 'Menu List.'
            })
        }
    })
})

module.exports = router
