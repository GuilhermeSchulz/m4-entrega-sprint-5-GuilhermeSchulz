import { updateUserService } from './../services/updateUser.service';
import { createUserService } from './../services/postUser.service';
import { IUserRequest } from "../interfaces/users"
import { Request, Response } from 'express'
import { getUsersService } from '../services/getUsers.service';
import { deleteUserService } from '../services/deleteUser.service';

export const createUserController = async (req: Request, res: Response) => {
    const userData: IUserRequest = req.body
    const [status, user] = await createUserService(userData)
    return res.status(status as number).json(user)
}
export const getUsersController = async (req: Request, res: Response) => {
    const [status, users] = await getUsersService()
    return res.status(status as number).json(users)
}   
export const deleteUserController = async (req: Request, res: Response) => {
    const id = req.params.id
    const [status, user] = await deleteUserService(id)
    return res.status(status as number).json(user)
}
export const updateUserController = async (req: Request, res: Response) => {
    const id = req.params.id
    const userData = req.body
    const [status, user] = await updateUserService(userData, id)
    return res.status(status as number).json(user)
}