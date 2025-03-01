import Router from "express";
import categoryController from "../controllers/category.controller";
import { authenticateJWT } from "../middleware/auth.middleware";

const router = Router()

router.post('/', authenticateJWT, (req, res) => categoryController.createCategory(req, res))
router.get('/filter/:name', authenticateJWT, (req, res) => categoryController.filterCategory(req, res))

export default router;
