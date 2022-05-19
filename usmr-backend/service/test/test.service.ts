import { Request, Response } from 'express'
import logger from '../../logger'

export async function testApi(req: Request, res: Response) {
    logger.info('Test Controller Working')
    if (req) {
        res.send('New Api Working')
    }
}
