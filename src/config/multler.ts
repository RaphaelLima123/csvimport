import multer from 'multer'
import path from 'path'

module.exports = {
  dest: path.resolve(__dirname, '../../tmp/uploads'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '../../tmp/uploads'))
    },
    filename: (req, file, cb) => {
      cb(null, Date.now().toString() + '-' + `${file.originalname}`)
    }
  }),
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  fileFilter: (req: any, file: any, cb: CallableFunction) => {
    const allowedMimes = ['text/csv']
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type'))
    }
  }
}
