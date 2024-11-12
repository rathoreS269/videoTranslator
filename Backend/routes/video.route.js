import express from 'express'
import { test , processVideoLink} from '../controllers/video.controller.js'

const router = express.Router()

router.get('/test',test)

router.post('/upload-link', processVideoLink);

export default router