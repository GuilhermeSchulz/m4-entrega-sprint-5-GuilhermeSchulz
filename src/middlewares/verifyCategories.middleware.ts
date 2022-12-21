import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Categories } from "../entities/categories.entity";

export const verifyCategory = async(req: Request, res: Response, next: NextFunction) => {
    const categoryRepository = AppDataSource.getRepository(Categories)
    const verifyIfCategory = await categoryRepository.findBy({name: req.body.name})
    if(verifyIfCategory?.length){
        return res.status(409).json({
            message: "Category Already Exists"
        })
    }
    return next()
}