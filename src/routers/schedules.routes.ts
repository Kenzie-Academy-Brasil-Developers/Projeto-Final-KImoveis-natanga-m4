import { Router } from 'express';
import { createdSchedulesControler, getAllschedulesControler } from './../controllers/schedule.controllers';
import { ensureTokenIsValidMiddleware } from './../middlewares/user/ensureTokenIsValid.Middleware';
import { checkDuplicateVisitMiddlewares } from './../middlewares/schedule/checkDuplicateVisit.Middlewares';
import { validBodyMiddleware } from './../middlewares/user/validBody.Middleware';
import { schedulesSchemaRequest } from '../schemas/schedules.schemas';
import { checkDuplicateUserVisitMiddlewares } from './../middlewares/schedule/checkDuplicateUserVisit.Middlewares';
import { isAdminMiddleware } from './../middlewares/user/isAdmin.Middleware';
import { validateDateAndHourMiddlewares } from './../middlewares/schedule/validateDateAndHour.Middlewares';
import { realEstateScheduleFilterMiddlewares } from './../middlewares/schedule/realEstateScheduleFilter.Middlewares';

const schedulesRoutes: Router = Router()

schedulesRoutes.post('', ensureTokenIsValidMiddleware,
    validBodyMiddleware(schedulesSchemaRequest),
    validateDateAndHourMiddlewares,
    checkDuplicateUserVisitMiddlewares,
    checkDuplicateVisitMiddlewares,
    realEstateScheduleFilterMiddlewares,
    createdSchedulesControler)
schedulesRoutes.get('/realEstate/:id', ensureTokenIsValidMiddleware,
    isAdminMiddleware,
    realEstateScheduleFilterMiddlewares,
    getAllschedulesControler)


export default schedulesRoutes