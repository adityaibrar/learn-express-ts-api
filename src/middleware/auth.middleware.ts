import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_KEY

export interface AuthRequest extends Request{
    user?: any;
}

export const authenticateJWT = (req: AuthRequest, res: Response, next: NextFunction) =>{
    const authHeader = req.headers.authorization;

    if(authHeader){
        const token = authHeader.split(' ')[1]
        jwt.verify(token, secretKey!, (err, user) => {
            if (err) {
                return res.sendStatus(403)
            }
            req.user = user;
            next()
        })
    } else {
        res.sendStatus(401)
    }
}