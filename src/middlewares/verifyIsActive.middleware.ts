import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"

export const userActiveMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id: req.params.id})
    if(!user){
        return res.status(404).json({message: "User not found"})
    }else if(user.isActive === false){
        return res.status(400).json({message: "User is not active"})
    }else{
        return next()
    }
}