import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { Addresses } from "../entities/adresses.entity"


export const verifyAdress = async (req:Request, res:Response, next:NextFunction) => {
    const adressRepository = AppDataSource.getRepository(Addresses)

    const adresses = await adressRepository.findOneBy({id: req.body.address})
    if(adresses){
        return res.status(404).json({message: "Adress already exists"})
    }
    return next()
}