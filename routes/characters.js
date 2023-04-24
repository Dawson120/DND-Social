import { Router } from 'express'

import * as characterCtrl from '../controllers/characters.js'

const router = Router()

router.get('/', characterCtrl.index)
router.get('/new', characterCtrl.new)
router.get('/:characterId', characterCtrl.show)
router.post('/', characterCtrl.create)

export {
  router
}