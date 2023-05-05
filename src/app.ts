import "reflect-metadata"
import "express-async-errors"
import express from "express"
import categoriesRoutes from "./routers/categories.routes"
import loginRoutes from "./routers/login.routes"
import realEstateRoutes from "./routers/realEstate.routes"
import schedulesRoutes from "./routers/schedules.routes"
import userRoutes from "./routers/user.routes"


const app = express()
app.use(express.json())

app.use(userRoutes);
app.use(loginRoutes);
app.use(realEstateRoutes);
app.use(categoriesRoutes);
app.use(schedulesRoutes);


app.use(handleErros)


export default app