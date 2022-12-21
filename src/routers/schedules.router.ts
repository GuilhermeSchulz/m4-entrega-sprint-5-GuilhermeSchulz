import { verifyAdmin } from './../middlewares/verifyAdmin.middleware';
import { createScheduleController, getScheduleByIdController } from './../controllers/schedule.controller';
import { verifyToken } from './../middlewares/verifyToken.middleware';
import { Router } from 'express';


const schedulesRoutes = Router()


schedulesRoutes.post('', verifyToken, createScheduleController)
schedulesRoutes.get('/properties/:id', verifyToken,verifyAdmin, getScheduleByIdController) 

export default schedulesRoutes;