import * as admin from 'firebase-admin'
import { RealTimeDataBase } from './realtimedb'
const serviceA = require('../config/effect-guitar-pedals-firebase-adminsdk-nfs21-abb706dadd.json')
const databaseURL = process.env.FIREBASE_DATABASE_URL
admin.initializeApp({
    credential: admin.credential.cert(serviceA),
    databaseURL: databaseURL,
})

export const db = admin.database()
export const realTimeDataBase = new RealTimeDataBase(db)
