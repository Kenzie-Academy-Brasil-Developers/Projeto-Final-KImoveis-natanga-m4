import { Router } from "express";
import { createCategoryService } from './../services/category/createCategory.service';
import { validBodyMiddleware } from './../middlewares/user/validBody.Middleware';
import { categorySchema } from "../schemas/categories.schema";
import { getAllCategoryControler } from "../controllers/categories.controllers";
import { isAdminMiddleware } from './../middlewares/user/isAdmin.Middleware';
import { categoryExistMiddlewares } from './../middlewares/category/categoryExist.Middlewares';

const categoriesRoutes: Router = Router()


categoriesRoutes.post('', validBodyMiddleware(categorySchema), categoryExistMiddlewares, isAdminMiddleware, createCategoryService)
categoriesRoutes.get('', getAllCategoryControler)


export default categoriesRoutes