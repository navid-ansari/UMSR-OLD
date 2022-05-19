import express from 'express' // npm i @types/express
const dotenv = require('dotenv')

// logger
import log from './logger'

// routes
import routes from './routes'

// mongo config
import { connectDB } from './config'

// validation middleware
import { validateReq, LoggerMiddleware } from './middleware'

// swagger docs
import swaggerDocs from './swagger'

const app = express()
dotenv.config()
app.use(express.json())
app.use(LoggerMiddleware)

// disable HTTP request caching
app.set('etag', false)
/*app.use((req: any, res: any, next: any) => {
  res.set("Cache-Control", "no-store");
  next();
});*/

const PORT = process.env.PORT || 3200
app.listen(PORT, () => {
    log.info(`server started on port ${PORT} with typescript`)
    connectDB()
    routes(app)
    swaggerDocs(app, 5000)
})
