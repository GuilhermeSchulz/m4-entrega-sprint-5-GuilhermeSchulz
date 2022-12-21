import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

export const verifyUser = async(req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User)
    const verifyIfUser = await userRepository.findBy({email: req.body.email})
    if(verifyIfUser?.length){
        return res.status(409).json({
            message: "User Already Exists"
        })
    }
    return next()
}