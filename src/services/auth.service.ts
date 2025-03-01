import prisma from "../prisma/client";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_KEY

class AuthService {
    async register(data: { email: string, username: string, password: string }) {
        const { email, username, password } = data;
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                email,
                username,
                password: hashPassword,
            }
        })
        return user
    }

    async login(data: { email: string, password: string }) {
        const { email, password } = data;
        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        })

        if (!user) throw new Error('User tidak ditemukan')

        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) throw new Error('Password salah')

        const token = jwt.sign({ id: user.id, email: user.email }, secretKey!, { expiresIn: '1h' })
        return token
        }
}

export default new AuthService()