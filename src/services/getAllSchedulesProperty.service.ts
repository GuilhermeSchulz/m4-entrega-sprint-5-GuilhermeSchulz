import AppDataSource from '../data-source';
import { Properties } from '../entities/properties.entity';
import { Schedules } from '../entities/scheduled.entity';

export const getSchedulesPropertyService = async(PropertyId : string): Promise<Array<number | Schedules[] | object | []>>=> {

    const schedulesRepository = AppDataSource.getRepository(Schedules)
    
    
    
    const propertiesRepository = AppDataSource.getRepository(Properties)

    const properties = await propertiesRepository.findOneBy({id: PropertyId})

    if(!properties) return [404, { message: "No properties found" }]

    
        const schedules = await schedulesRepository.createQueryBuilder("schedules_users_properties")
        .innerJoinAndSelect('schedules_users_properties.property', "properties")
        .innerJoinAndSelect('schedules_users_properties.user', "users")
        .where('properties.id = :id', {id: PropertyId})
        .getMany()




    return [200, {schedules: schedules}]
}