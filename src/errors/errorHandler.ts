import { NextFunction, Request, Response } from "express"
import { AppError } from "./errors"

export const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json(error.message)
    }


    return response.status(500).json({
        message: 'Internal server error'
    })

}