import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as morgan from 'morgan'
import { realTimeDataBase } from './firebease'
import { effect_router } from '../routers/effect.router'
import { wave_file_router } from '../routers/write-wave-file.router'
import { resolve } from 'path'

function notFoundPage(req, res, next) {
    let err = {
        message: 'Not Found',
        status: 404,
    }

    next(err)
}
function handlerErroo(error, req, res, next) {
    res.status(error.status || 500).json({
        status: error.status,
        message: error.message,
    })
}
const headerSet = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    )
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type,Authorization'
    )
    next()
}
const midleware = app => {
    const file_ = process.env.SAVE_FILE_TO_FOLDER
    app.use(express.static(resolve(`./${file_}`)))
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    )
    app.use(morgan('dev'))
    app.use(bodyParser.json())
    app.use(headerSet)
}
realTimeDataBase
const configFirebaseDb = (req, res, next) => {
    if (!req.db) {
        req.db = realTimeDataBase
    }
    next()
}
const router_func = (app: express.Express, router: express.Router) => {
    // app.use("/")
    app.use(configFirebaseDb)
    const eff = effect_router(router)
    app.use('/effect/', eff)
    app.use('/wave', wave_file_router(router))
    app.use(notFoundPage)
    app.use(handlerErroo)
}
export const app_express = () => {
    const app: express.Express = express()
    const router: express.Router = express.Router()
    midleware(app)
    router_func(app, router)
    return app
}
