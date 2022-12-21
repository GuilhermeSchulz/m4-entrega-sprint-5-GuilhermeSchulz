
import AppDataSource from "../data-source"
import { Categories } from '../entities/categories.entity';

export const getPropertiesByCategoryIdService = async(categoryId:string): Promise<Array<number | object>>=> {

    const propertiesRepository = AppDataSource.getRepository(Categories)

    const getPropertiesId =  await propertiesRepository.findOne({
        where:{
            id:categoryId
        },
        relations:{
            properties:true
        }
    })
    
    

    return [200, getPropertiesId]
}