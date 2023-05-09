import { Router } from 'express';
import { isAdminMiddleware } from './../middlewares/user/isAdmin.Middleware';
import { createRealEstateController, getAllRealEstateController } from './../controllers/realEstate.controllers';
import { validBodyMiddleware } from './../middlewares/user/validBody.Middleware';
import { realEstateSchemaRequest } from '../schemas/real_estate.schema';

const realEstateRoutes: Router = Router()

realEstateRoutes.post('', validBodyMiddleware(realEstateSchemaRequest), isAdminMiddleware, createRealEstateController)
realEstateRoutes.get('', getAllRealEstateController)







export default realEstateRoutes