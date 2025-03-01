import { Request, Response } from "express";
import userService from "../services/user.service";

class UserController {
    async getProfile(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id);
            const user = await userService.getProfile(userId)
            res.status(200).json({
                message: 'User ditemukan..',
                data_user: user
            })
        } catch (err: any) {
            res.status(400).json({
                message: err.message,
            })
        }
    }
}

export default new UserController()