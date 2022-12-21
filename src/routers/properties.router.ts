
import { verifyAdmin } from './../middlewares/verifyAdmin.middleware';
import { verifyToken } from './../middlewares/verifyToken.middleware';
import { createPropertyController, getPropertyController } from './../controllers/properties.controller';
import { Router } from 'express';
const propertiesRoutes = Router()

propertiesRoutes.post('',verifyToken, verifyAdmin,  createPropertyController)
propertiesRoutes.get('', getPropertyController)



export default propertiesRoutes
