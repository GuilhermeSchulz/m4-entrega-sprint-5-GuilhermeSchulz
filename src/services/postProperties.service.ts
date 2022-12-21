import { IPropertyRequest } from './../interfaces/properties/index';

import AppDataSource from '../data-source'
import { Properties } from '../entities/properties.entity'
import { Addresses } from '../entities/adresses.entity';
import { Categories } from '../entities/categories.entity';

export const createPropertyService = async(propertyData: IPropertyRequest ): Promise<Array<number | IPropertyRequest | {}>> => {
    if( propertyData.address.zipCode.length > 8){
        return [400, {message: 'invalid zip code'}]
    }
    if(propertyData.address.state.length > 2){
        return [400, {message: 'invalid state'}]
    }
    const addressRepository = AppDataSource.getRepository(Addresses)
    const categoryRepository = AppDataSource.getRepository(Categories)
    const propertiesRepository = AppDataSource.getRepository(Properties)
    const foundProperty = await addressRepository.find({
        where: {
            number: propertyData.address.number,
            zipCode: propertyData.address.zipCode
        },
    })
    if(foundProperty.length > 0){
        return [409,{message: "Property already exists"}]
    }
    const category = await categoryRepository.findOneBy({
        id: propertyData.categoryId
    })
    if(!category){
        return [ 404, { message:"Category not found"}]
    }
    const address = addressRepository.create(propertyData.address)
    await addressRepository.save(address)
    const properties = {...propertyData, address, category}
    const property = propertiesRepository.create(properties)
    await propertiesRepository.save(property)
    
    
    return [201, property]


}