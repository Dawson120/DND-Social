import { Router } from 'express'

import * as characterCtrl from '../controllers/characters.js'

const router = Router()

router.get('/', characterCtrl.index)
router.get('/new', characterCtrl.new)

export {
  router
}