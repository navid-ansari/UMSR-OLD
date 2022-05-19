import logger from 'pino'
const pino = require('pino')
import dayjs from 'dayjs'

const log = logger({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    },
    //prettyPrint: true,
    base: {
        pid: false
    },
    timestamp: () => `,"time":"${dayjs().format()}"`
})

export default log
