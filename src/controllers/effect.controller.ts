import { RealTimeDataBase, DataEffect } from '../lib/realtimedb'

export class ResponeData {
    constructor(public message: string, public data: any) {}
}

export const addEffect = async (req, res, next) => {
    const db: RealTimeDataBase = req.db
    const dataEff: DataEffect = {
        userName: 'sukum',
        label: 'overdrive',
        share: true,
    }
}

class A {
    get = a => {
        return a * 12
    }
}
// export const getEffects = async (req, res, next) => {
//   const db: RealTimeDataBase = req.db;
//   const data = await db.getEffectFromDataBase();
//   const dataA = Object.values(data.val().effects);
//   res.json(new ResponeData("success", dataA));
// };
