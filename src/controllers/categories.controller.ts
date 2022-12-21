import { getPropertiesByCategoryIdService } from './../services/getPropertiesByCategories.service';
import { Request, Response } from 'express'
import { createCategory } from './../services/postCategory.service';
import { ICategoryRequest } from './../interfaces/categories/index';
import {getCategoriesService} from './../services/getCategories.service';
export const createCategoryController = async(req: Request, res: Response) => {

    const categoryData: ICategoryRequest = req.body
    const [status, category] = await createCategory(categoryData)
    return res.status(status as number).json(category)

}

export const getCategoriesController = async(req: Request, res: Response) => {
    const [status, categories] = await getCategoriesService()
    return res.status(status as number).json(categories)
}

export const getPropertiesByCategoryIdController = async(req: Request, res: Response) => {
    const idCategory = req.params.id
    const [status, properties] = await getPropertiesByCategoryIdService(idCategory)
    return res.status(status as number).json(properties)
}