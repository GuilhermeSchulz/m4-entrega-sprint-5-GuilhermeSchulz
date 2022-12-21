import { AppError } from './../errors/errors';
import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"

export const deleteUserService = async(id: string): Promise<Array<number | object>>=> {
        const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOneBy({id: id})

        if (!user) {
            throw new AppError("User not found", 400)
        }
        
        user.isActive = false
        await userRepository.save(user)

        return [204, {message: "user deleted successfully"}]
}