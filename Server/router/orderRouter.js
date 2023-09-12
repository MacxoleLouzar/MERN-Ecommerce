import express from 'express'
import { OrderProducts, viewAllOrder, viewOrderUser } from '../controller/OrderController.js'

const router = express.Router()

router.post('/', OrderProducts)
router.get('/', viewAllOrder)
router.get('/:id', viewOrderUser)

export default router