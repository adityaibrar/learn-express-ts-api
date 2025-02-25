import { Request, Response } from "express";
import authService from "../services/auth.service";

class AuthController {
    async register(req: Request, res: Response) {
        try {
            const user = await authService.register(req.body)
            res.status(201).json({
                message: 'Pendaftaran anda berhasil',
                user: user,
            })
        } catch (err: any) {
            res.status(400).json({
                error: err.message 
            })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const token = await authService.login(req.body)
            res.status(200).json({
                message: 'Login berhasil...',
                token: token
            })
        } catch (err: any) {
            res.status(400).json({
                error: err.message
            })
        }
    }
}

export default new AuthController()