import express from 'express'
import { test , processVideoLink, convertVideo} from '../controllers/video.controller.js'

const router = express.Router()

router.get('/test',test)

router.post('/upload-link', processVideoLink);
router.post('/convert-video', convertVideo );

export default router