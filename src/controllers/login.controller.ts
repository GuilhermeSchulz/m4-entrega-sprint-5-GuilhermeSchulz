import { Request, Response } from 'express'
import { IUserLogin } from '../interfaces/users'
import { loginService } from '../services/login.service'


export const createSessionController = async(req: Request, res: Response) => {

    const sessionData: IUserLogin = req.body
    const [status, token] = await loginService(sessionData)
    return res.status(status as number).json(token)

}