import * as dotenv from 'dotenv'
import { NextFunction, Request, Response } from "express";


dotenv.config()

export const verifyAdmin =  async(req: Request, res: Response, next: NextFunction) => {
    let foundUser = req.user

    if(foundUser.isAdm === false){
         return res.status(403).json({
                message: "User not admin"
            })
    }
    return next()
}