import { IUser } from './../interfaces/users/index';
import AppDataSource from '../data-source'
import { User } from '../entities/user.entity'
import { allUsersWithoutPassword } from './../serializers/user.serializer';

export const getUsersService = async(): Promise<Array<number | IUser[]>>=> {

    const userRepository = AppDataSource.getRepository(User)
    
    const allUsers = await userRepository.find()

    const validatedUsers = await allUsersWithoutPassword.validate(allUsers, { stripUnknown: true})

    return [201, validatedUsers]
}