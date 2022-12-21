import "express-async-errors"
import { errorHandler } from './errors/errorHandler';
import { loginRoutes } from './routers/login.router';
import "reflect-metadata"
import express from "express"
import userRoutes from "./routers/users.router"
import propertiesRoutes from "./routers/properties.router";
import categoriesRoutes from "./routers/categories.router";
import schedulesRoutes from "./routers/schedules.router";



const app = express()
app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', loginRoutes)
app.use('/categories', categoriesRoutes)
app.use('/properties', propertiesRoutes)
app.use('/schedules', schedulesRoutes)
app.use(errorHandler)
export default app