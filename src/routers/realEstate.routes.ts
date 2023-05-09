import { Router } from 'express';
import { isAdminMiddleware } from './../middlewares/user/isAdmin.Middleware';
import { createRealEstateController, getAllRealEstateController } from './../controllers/realEstate.controllers';
import { validBodyMiddleware } from './../middlewares/user/validBody.Middleware';
import { realEstateSchemaRequest } from '../schemas/real_estate.schema';
import { ensureTokenIsValidMiddleware } from './../middlewares/user/ensureTokenIsValid.Middleware';
import { validateUniqueAddressMiddlewares } from '../middlewares/schedule/validateUniqueAddress.Middlewares';

const realEstateRoutes: Router = Router()

realEstateRoutes.post('', validBodyMiddleware(realEstateSchemaRequest), ensureTokenIsValidMiddleware, isAdminMiddleware, validateUniqueAddressMiddlewares, createRealEstateController)
realEstateRoutes.get('', getAllRealEstateController)







export default realEstateRoutes