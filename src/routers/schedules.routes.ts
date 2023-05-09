import { Router } from 'express';
import { createdSchedulesControler, getAllschedulesControler } from './../controllers/schedule.controllers';
import { ensureTokenIsValidMiddleware } from './../middlewares/user/ensureTokenIsValid.Middleware';
import { checkDuplicateVisitMiddlewares } from './../middlewares/schedule/checkDuplicateVisit.Middlewares';
import { validBodyMiddleware } from './../middlewares/user/validBody.Middleware';
import { schedulesSchemaRequest } from '../schemas/schedules.schemas';
import { checkDuplicateUserVisitMiddlewares } from './../middlewares/schedule/checkDuplicateUserVisit.Middlewares';
import { isAdminMiddleware } from './../middlewares/user/isAdmin.Middleware';

const schedulesRoutes: Router = Router()

schedulesRoutes.post('', ensureTokenIsValidMiddleware, checkDuplicateVisitMiddlewares, checkDuplicateUserVisitMiddlewares, validBodyMiddleware(schedulesSchemaRequest), createdSchedulesControler)
schedulesRoutes.get('/realEstate/:id', ensureTokenIsValidMiddleware, isAdminMiddleware, getAllschedulesControler)


export default schedulesRoutes