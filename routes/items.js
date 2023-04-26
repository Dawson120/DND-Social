import { Router } from "express";
import * as itemsCtrl from '../controllers/items.js'
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()

// router.post('/', isLoggedIn, itemsCtrl.createItem)
router.post('/:characterId/new', isLoggedIn,itemsCtrl.createItem)

router.delete('/:characterId/inventory/:itemId', isLoggedIn, itemsCtrl.removeItem)

export { router }