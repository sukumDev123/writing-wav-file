const dotenv = require('dotenv')
dotenv.config()
import { createServer } from 'http'
import { app_express } from './lib/express'
const port = process.env.PORT

createServer(app_express()).listen(port, () =>
    console.log(`listen port is : ${port}`)
)
