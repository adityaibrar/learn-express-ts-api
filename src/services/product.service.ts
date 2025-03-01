import prisma from "../prisma/client";

interface ProductInput {
    name: string,
    price: number,
    description: string,
    userId: number,
}

class ProductService {
    async createProduct(data: ProductInput){
        const product = await prisma.product.create({
            data,
        })
        return product
    }

    async getProductByUser(idUser: number){
        const product = await prisma.product.findMany({
            where: { 
                userId: idUser
            },
            include: { categories: true }
        })
        return product
    }
}

export default new ProductService()