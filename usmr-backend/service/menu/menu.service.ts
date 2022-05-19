import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import { getMockReq, getMockRes } from '@jest-mock/express'
// model
import { IMenu } from '../../model'

// logger
import log from '../../logger'

// schema
const MenuSchema = require('../../schema/menu/MenuSchema')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

export const getMenu = async (req: Request, res: Response) => {
    log.info('Menu Service Working')
    try {
        const menu: IMenu = await MenuSchema.find({}) // query mongo db
        if (menu) {
            return res.status(200).json({ data: menu })
        }
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            success: false,
            message: 'Error in Menu Query'
        })
    }
}
