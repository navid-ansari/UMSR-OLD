import { Request, Response } from 'express'

// service
import { getBag } from '../../service'

// logger
import log from '../../logger'

export async function getBagHandler(req: Request, res: Response) {
    log.info('Bag Controller Working')
    try {
        return getBag(req, res)
    } catch (e) {
        log.error('Error In Bag Controller')
    }
}
