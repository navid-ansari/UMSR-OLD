const mongoose = require('mongoose')
import log from '../logger'

export async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_CONN_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'connection error: '))
        db.once('open', function () {
            log.info(`MongoDB Connected..!!`)
        })
    } catch (error) {
        log.error(`MongoDB Connection Error..!!`)
        process.exit()
    }
}
