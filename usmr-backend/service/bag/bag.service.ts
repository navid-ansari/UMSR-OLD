import express, { Request, Response } from 'express'
import bagStore from '../../store/bag.store'
import shopStore from '../../store/shop.store'

// service
import bagService from '../bag'

// logger
import log from '../../logger'

export async function getBag(req: Request, res: Response) {
    log.info('Bag Service Working')
    // const service = bagService({bagStore, shopStore});
    const service = bagService({ bagStore, shopStore })
    const id: string = req.params.id
    const locale: string | any = req.headers['pret-locale']
    /*console.log(req.headers);
  console.log("Id => " +id);
  console.log("locale => " +locale);*/
    try {
        const bag = await service.fetchBag(id, locale)
        res.send('Bag response')
    } catch (err: any) {
        res.status(500).json({ success: false, message: err.message })
    }
}
