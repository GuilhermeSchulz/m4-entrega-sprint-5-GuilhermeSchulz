import { IUser } from './../interfaces/users/index';
import AppDataSource from '../data-source'
import { User } from '../entities/user.entity'
import { IUserRequest } from '../interfaces/users'
import { userWithoutPasswordSerializer } from '../serializers/user.serializer';

export const createUserService = async(userData: IUserRequest): Promise<Array<number | IUser | {}>> => {
    

    const userRepository = AppDataSource.getRepository(User)

   
    const createdUser = userRepository.create(userData)
    await userRepository.save(createdUser)


    const userWithoutPassord = await userWithoutPasswordSerializer.validate(createdUser, {
        stripUnknown: true
    })

    return [201, userWithoutPassord]


}