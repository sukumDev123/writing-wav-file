import { RealTimeDataBase, FileDetail } from '../lib/realtimedb'

export const writeWaveFile = (req, res, next) => {
    const files = req.files[0]
    const { name_user } = req.body
    const file_ = process.env.SAVE_FILE_TO_FOLDER
    const fileDetail: FileDetail = {
        filename: files.filename,
        size: files.size,
        path: `/${file_}/sound/${files.filename}`,
        type: files.mimetype.split('/')[1],
        public: false,
    }
    const realTimedb: RealTimeDataBase = req.db
    realTimedb
        .setNameRef('wavefiles')
        .setChildName(name_user)
        .addEffectToDataBase(fileDetail)
        .then(suc => res.json(suc))
        .catch(err => next(err))

    // res.json(
    //   new MessageRespone(
    //     "File is writen success, Waiting to file save to database.",
    //     200
    //   )
    // );
}
