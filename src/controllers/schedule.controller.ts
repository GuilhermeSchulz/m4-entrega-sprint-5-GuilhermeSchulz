import { getSchedulesPropertyService } from './../services/getAllSchedulesProperty.service';
import { createScheduleService } from './../services/postSchedule.service';
import { Request, Response } from "express"


export const createScheduleController = async (req: Request, res: Response) => {
    const scheduleBody = req.body
    const userId = req.user
    const [status, schedule] = await createScheduleService(scheduleBody, userId)
    return res.status(status as number).json(schedule)
}
export const getScheduleByIdController  = async (req: Request, res: Response) => {
    const idProperty = req.params.id
    const [status, schedule] = await getSchedulesPropertyService(idProperty)
    return res.status(status as number).json(schedule)

}