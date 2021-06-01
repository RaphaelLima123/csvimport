import { Router } from 'express'
import multer from 'multer'
import * as multerConfig from './config/multler'

const routes = Router()

routes.post('/uploads', multer(multerConfig).single('file'), (req, res) => {
  console.log(req.file)
  res.json({ message: 'Rota funcionando' })
})

export default routes
