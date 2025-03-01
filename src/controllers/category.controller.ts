import { Request, Response } from "express";
import categoryService from "../services/category.service";

class CategoryController {
    async createCategory(req: Request, res: Response) {
        try {
            const category = await categoryService.createCategory(req.body)
            res.status(201).json({
                message: "Kategori berhasil ditambahkan",
                category_name: category
            })
        } catch (err: any) {
            res.status(400).json({
                error: err.message
            })
        }
    }

    async filterCategory(req: Request, res: Response){
        try {
            const category_name = req.params.name
            const products = await categoryService.filterCategory(category_name)
            res.status(200).json({
                message: 'Produk ditemukan...',
                data_product: products
            })
        } catch (err: any) {
            res.status(400).json({
                error: err
            })
        }
    }
}

export default new CategoryController()