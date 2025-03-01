import { Router } from "express";
import userController from "../controllers/user.controller";
import { authenticateJWT } from "../middleware/auth.middleware";

const router = Router()

router.get('/:id', authenticateJWT,(req, res) => userController.getProfile(req, res))

export default router