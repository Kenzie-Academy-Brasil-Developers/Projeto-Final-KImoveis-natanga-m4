import { Router } from "express";
import { userSchemaRequests } from "../schemas/user.schema";
import { createUserControler, deleteUserControler, getAllUserControler, updateUserControler } from './../controllers/users.controllers';
import { validBodyMiddleware } from './../middlewares/validBody.Middleware';
import { verifyEmailExistMiddleware } from './../middlewares/verifyEmailExist.Middleware';
import { ensureTokenIsValidMiddleware } from './../middlewares/ensureTokenIsValid.Middleware';
import { isAdminMiddleware } from './../middlewares/isAdmin.Middleware';
import { userSchemaUpdate } from './../schemas/user.schema';
import { confirmUser } from './../middlewares/confirmUser.middlewares';
import { checkIfUserIdExistsMiddleware } from './../middlewares/checkIfUserIdExists.middleware';

const userRoutes: Router = Router()

userRoutes.post('', verifyEmailExistMiddleware, validBodyMiddleware(userSchemaRequests), createUserControler);
userRoutes.get('', ensureTokenIsValidMiddleware, isAdminMiddleware, getAllUserControler);
userRoutes.patch(':id', ensureTokenIsValidMiddleware, checkIfUserIdExistsMiddleware, isAdminMiddleware, confirmUser, validBodyMiddleware(userSchemaUpdate), updateUserControler)
userRoutes.delete(':id', checkIfUserIdExistsMiddleware, ensureTokenIsValidMiddleware, isAdminMiddleware, deleteUserControler)




export default userRoutes