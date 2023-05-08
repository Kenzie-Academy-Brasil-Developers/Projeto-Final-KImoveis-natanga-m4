import { Router } from 'express';
import { validBodyMiddleware } from './../middlewares/user/validBody.Middleware';
import { categorySchema } from '../schemas/categories.schema';
import { getAllCategoryController, createCategoryController } from '../controllers/categories.controllers';
import { isAdminMiddleware } from './../middlewares/user/isAdmin.Middleware';
import { categoryExistMiddlewares } from './../middlewares/category/categoryExist.Middlewares';
import { getCategoryRealEstateController } from './../controllers/categories.controllers';

const categoriesRoutes: Router = Router()


categoriesRoutes.post('', validBodyMiddleware(categorySchema), categoryExistMiddlewares, isAdminMiddleware, createCategoryController)
categoriesRoutes.get('', getAllCategoryController)
categoriesRoutes.get(':id/realEstate', getCategoryRealEstateController)


export default categoriesRoutes