import { Router } from 'express';
import { loginController } from './../controllers/login.controllers';
import { validBodyMiddleware } from './../middlewares/user/validBody.Middleware';
import { loginSchema } from './../schemas/login.schemas';

const loginRoutes: Router = Router()


loginRoutes.post('', validBodyMiddleware(loginSchema), loginController)





export default loginRoutes