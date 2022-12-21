import { AppError } from './../errors/errors';

import { Request, Response, NextFunction } from 'express'
import { AnySchema } from 'yup'

export const verifyDataUpdateMiddleware = (schema: AnySchema) => async(req: Request, res: Response, next: NextFunction) => {

    try {
        
        const validatedData = await schema.validate(req.body, {
            abortEarly: true,
            stripUnknown: true
        })
        req.body = validatedData
        if(req.body.isAdm || req.body.isActive || req.body.id || !req.body || !Object.keys(req.body).length) {
            return res.status(401).json({message: 'Invalid data provided'})
         }
        return next()
        
    } catch (error) {
        return res.status(401).json({
            error: error.errors
        })
    }

}
