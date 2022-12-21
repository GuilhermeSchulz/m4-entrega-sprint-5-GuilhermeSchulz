import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { Categories } from "../entities/categories.entity"


export const verifyIdCategoryMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const categoryRepository = AppDataSource.getRepository(Categories)
    const category = await categoryRepository.findOneBy({id: req.params.id})
    if(!category){
        return res.status(404).json({message: "Category not found"})
    }

    return next()
}