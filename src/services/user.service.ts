import prisma from '../prisma/client'

class UserService {
    async getProfile(userId: number) {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                email: true,
                username: true,
            }
        })
        if(!user) throw new Error('User tidak ditemukan')
        return user;
    }
}

export default new UserService()