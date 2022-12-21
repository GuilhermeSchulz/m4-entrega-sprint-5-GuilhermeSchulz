import { IScheduleRequest } from './../interfaces/schedules/index';
import AppDataSource from "../data-source"
import { Properties } from "../entities/properties.entity"
import { Schedules} from "../entities/scheduled.entity"
import { User } from "../entities/user.entity"


export const createScheduleService = async  (scheduleData: IScheduleRequest, userId:  any) => {
    const time = scheduleData.hour.split(':')
    const day = new Date(scheduleData.date)
    let today = day.toLocaleDateString('en-US',{weekday: 'long'});


    if(!scheduleData.hour) return [400, {message: 'Invalid time provided'}]
    if(Number(time[0]) < 8){
        return [ 400, {message: 'Invalid time'}]
    }
    if(Number(time[0]) >= 18){
        return [ 400, {message: 'Invalid time'}]
    }
    if(today == 'Saturday' || today == 'Sunday') return [ 400, {message: 'Invalid date provided'}]

    const propertyRepository  = AppDataSource.getRepository(Properties)
    const property = await propertyRepository.findOneBy({id: scheduleData.propertyId})

    if(!property) return [404, { message: 'Property Not found'}]
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id:userId.id})

    const scheduleRepository = AppDataSource.getRepository(Schedules)
    const foundSchedule = await scheduleRepository.createQueryBuilder("schedules_users_properties")
    .where({date: scheduleData.date, hour: scheduleData.hour})
    .getOne()
    if(foundSchedule) return [409, { message: 'Schedule already exists'}]

    const schedule = scheduleRepository.create({...scheduleData, property, user})

    await scheduleRepository.save(schedule)



         return [201, {message: "Sucessfully registered a schedule"}]


}