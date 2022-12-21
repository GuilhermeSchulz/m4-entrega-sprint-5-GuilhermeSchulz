import { updateUserService } from './../services/updateUser.service';
import { verifyIdMiddleware } from './../middlewares/verifyId.middleware';
import { verifyDataUpdateMiddleware } from './../middlewares/verifyDataUpdate.middleware';
import { userActiveMiddleware } from './../middlewares/verifyIsActive.middleware';
import { userSerializer, updateUserSerializer } from './../serializers/user.serializer';
import { verifyUser } from './../middlewares/verifyUser.middleware';
import { verifyAdmin } from './../middlewares/verifyAdmin.middleware';
import { deleteUserController, getUsersController, updateUserController } from './../controllers/user.controller';
import { Router } from 'express'
import { createUserController } from '../controllers/user.controller'
import { verifyToken } from '../middlewares/verifyToken.middleware';
import { verifyDataMiddleware } from '../middlewares/verifyData.middleware';


const userRoutes = Router()

userRoutes.post('',verifyDataMiddleware(userSerializer) ,verifyUser, createUserController)
userRoutes.get('',verifyToken, verifyAdmin, getUsersController)
userRoutes.delete('/:id',verifyToken, verifyAdmin, userActiveMiddleware, deleteUserController)
userRoutes.patch('/:id',verifyDataUpdateMiddleware(updateUserSerializer), verifyToken, verifyAdmin,verifyIdMiddleware, updateUserController)


export default userRoutes