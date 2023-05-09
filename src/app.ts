import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import categoriesRoutes from './routers/categories.routes'
import loginRoutes from './routers/login.routes'
import realEstateRoutes from './routers/realEstate.routes'
import schedulesRoutes from './routers/schedules.routes'
import userRoutes from './routers/user.routes'
import { handleErros } from './error/handleErros.errors'

const app = express()
app.use(express.json())

app.use('/users',userRoutes);
app.use('/login',loginRoutes);
app.use('/realEstate', realEstateRoutes);
app.use('/categories',categoriesRoutes);
app.use('/schedules',schedulesRoutes);

app.use(handleErros)


export default app