import { Request, Response } from "express";
import productService from "../services/product.service";

class ProductController {
    async createProduct(req: Request, res: Response) {
        try {
            const userId = req.body.userId
            const product = await productService.createProduct({...req.body, userId})
            res.status(201).json({
                message: "Produk berhasil ditambahkan...",
                data_product: product
            })
        } catch (err:any) {
            res.status(400).json({
                error: err.message
            })
        }
    }

    async getProductByUser(req: Request, res: Response) {
        try {
            const { userId } = req.params
            const id = parseInt(userId)
            const products = await productService.getProductByUser(id)
            res.status(200).json({
                message: 'Data berhasil diambil',
                product_user : products
            })
        } catch (err: any) {
            res.status(400).json({
                error: err.message
            })
        }
    }
}

export default new ProductController()