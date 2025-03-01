import { Router } from "express";
import productController from "../controllers/product.controller";
import { authenticateJWT } from "../middleware/auth.middleware";

const router = Router()

router.post('/', authenticateJWT, (req, res) => productController.createProduct(req, res))
router.get('/user/:userId', authenticateJWT, (req, res) => productController.getProductByUser(req, res))

export default router