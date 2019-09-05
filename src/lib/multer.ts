import * as multer from 'multer'
import * as path from 'path'
const storage = multer.diskStorage({
    destination: path.resolve(`./${process.env.SAVE_FILE_TO_FOLDER}/sound`),
    filename: function(req, file, cb) {
        cb(
            null,
            `${file.originalname.split(/[.]+/)[0]}-${Date.now()}.${
                file.mimetype.split('/')[1]
            }`
        )
    },
})

export const uploadsFile = multer({
    storage: storage,
})
