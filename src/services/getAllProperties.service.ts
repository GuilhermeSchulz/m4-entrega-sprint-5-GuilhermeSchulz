import AppDataSource from '../data-source';
import { Properties } from '../entities/properties.entity';
import { IPropertyRequest } from './../interfaces/properties/index';

export const getPropertiesService = async(): Promise<Array<number | Properties[]>>=> {

    const propertyRepository = AppDataSource.getRepository(Properties)
    
    const property = await propertyRepository.find({
        relations:{
            category: true,
            address:true,
        }
    })

    

    return [200, property]
}