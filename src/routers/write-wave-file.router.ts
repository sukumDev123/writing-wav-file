import { writeWaveFile } from '../controllers/write-wave-file.controller'
import { uploadsFile } from '../lib/multer'

// uploadsFile

export const wave_file_router = router => {
    router.post('/write_file', uploadsFile.array('blob'), writeWaveFile)
    return router
}
