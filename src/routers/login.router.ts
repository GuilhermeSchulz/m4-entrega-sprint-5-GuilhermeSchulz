import { Router } from 'express'
import { createSessionController } from '../controllers/login.controller'

export const loginRoutes = Router()

loginRoutes.post('', createSessionController)

