import { hashSync } from 'bcryptjs';

import { updateUserSerializer } from './../serializers/user.serializer';
import { IUserUpdate } from './../interfaces/users/index';
import { AppError } from './../errors/errors';
import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"


export const updateUserService = async(userData: IUserUpdate , id: string): Promise<Array<number | object>>=> {
    if(!userData){
        throw new AppError('Need Params', 401);
    }
        const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOneBy({id: id})
        if (!user) {
            throw new AppError("User not found", 400)
        }

        const userBody = await updateUserSerializer.validate(userData, {
            stripUnknown: true
        })
        
        if(userBody?.password){
            userBody.password =  hashSync(userBody.password, 10)
        }

        const newObj = {
            ...user,
            password: userBody.password || user.password,
            name: userBody.name || user.name,
            email: userBody.email || user.email
        }
        
        await userRepository.save(newObj)

        return [200, {message: "user deleted successfully"}]
}