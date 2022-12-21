import { getPropertiesService } from './../services/getAllProperties.service';
import { Request, Response } from "express";
import { createPropertyService } from "../services/postProperties.service";

export const createPropertyController = async (req: Request, res: Response) => {
    const propertyBody = req.body
    const [status, property] = await createPropertyService(propertyBody)
    return res.status(status as number).json(property)
}

export const getPropertyController = async ( req: Request, res: Response) => {

    const [status, property] = await getPropertiesService()
    return res.status(status as number).json(property)
 
}
