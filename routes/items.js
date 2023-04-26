import { Router } from "express";
import * as itemsCtrl from '../controllers/items.js'
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()

// router.post('/', isLoggedIn, itemsCtrl.createItem)
router.post('/:characterId/new', itemsCtrl.createItem)

export { router }