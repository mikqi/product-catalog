import { Router } from 'express'
import ProductRoutes from './products'
const router = Router()

router.use(ProductRoutes)

module.exports = router
