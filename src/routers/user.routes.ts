import { Router } from 'express';
import { userSchemaRequests } from '../schemas/user.schema';
import { createUserControler, deleteUserControler, getAllUserControler, updateUserControler } from './../controllers/users.controllers';
import { validBodyMiddleware } from './../middlewares/user/validBody.Middleware';
import { verifyEmailExistMiddleware } from './../middlewares/user/verifyEmailExist.Middleware';
import { ensureTokenIsValidMiddleware } from './../middlewares/user/ensureTokenIsValid.Middleware';
import { isAdminMiddleware } from './../middlewares/user/isAdmin.Middleware';
import { userSchemaUpdate } from './../schemas/user.schema';
import { confirmUser } from './../middlewares/user/confirmUser.middlewares';
import { checkIfUserIdExistsMiddleware } from '../middlewares/user/checkIfUserIdExists.middleware';

const userRoutes: Router = Router()

userRoutes.post('', verifyEmailExistMiddleware,
    validBodyMiddleware(userSchemaRequests),
    createUserControler);
userRoutes.get('', ensureTokenIsValidMiddleware,
    isAdminMiddleware,
    getAllUserControler);
userRoutes.patch('/:id', ensureTokenIsValidMiddleware,
    checkIfUserIdExistsMiddleware,
    confirmUser,
    validBodyMiddleware(userSchemaUpdate),
    updateUserControler)
userRoutes.delete('/:id', checkIfUserIdExistsMiddleware,
    ensureTokenIsValidMiddleware,
    isAdminMiddleware,
    deleteUserControler)




export default userRoutes