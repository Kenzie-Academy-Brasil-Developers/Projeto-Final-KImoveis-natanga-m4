import { Router } from "express";
import { userSchemaRequests } from "../schemas/user.schema";
import { createUserControler } from './../controllers/users.controllers';
import { validBodyMiddleware } from './../middlewares/validBody.Middleware';
import { verifyEmailExistMiddleware } from './../middlewares/verifyEmailExist.Middleware';

const userRoutes: Router = Router()

userRoutes.post('', verifyEmailExistMiddleware, validBodyMiddleware(userSchemaRequests), createUserControler);






export default userRoutes