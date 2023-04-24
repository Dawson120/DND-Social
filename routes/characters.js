import { Router } from 'express'
import * as characterCtrl from '../controllers/characters.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', characterCtrl.index)
router.get('/:characterId/edit', isLoggedIn, characterCtrl.edit)
router.get('/new', characterCtrl.new)
router.get('/:characterId', characterCtrl.show)
router.post('/', isLoggedIn,characterCtrl.create)
router.delete('/:characterId', isLoggedIn, characterCtrl.kill)

export {
  router
}