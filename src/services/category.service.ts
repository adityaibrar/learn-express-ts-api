import prisma from "../prisma/client";

class CategoryService{
    async createCategory(data: {category_name: string, productId: number}) {
        const category = await prisma.category.create({
            data,
        })
        return category
    }

    async filterCategory(category_name: string) {
        const category = await prisma.category.findMany({
            where: { category_name },
            include: { product: true }
        })
        const products = category.map(c => c.product)
        return products
    }
}

export default new CategoryService()