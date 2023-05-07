
import { Request, Response } from 'express';
import { tCategory } from '../interfaces/categories.interfaces';
import { createCategoryService } from './../services/category/createCategory.service';
import { getAllCategorysService } from './../services/category/getAllCategorys.service';
import { getCategoryRealEstateService } from './../services/category/getCategoryRealEstate.service';

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const newCategory: tCategory = await createCategoryService(req.body);

    return res.status(201).json(newCategory)

}

export const getAllCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const Categorys: tCategory[] = await getAllCategorysService()

    return res.status(200).json(Categorys)

}

export const getCategoryRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const Categorys = await getCategoryRealEstateService(Number(req.params.id))

    return res.status(200).json(Categorys)

} 

// }
// export const deleteCategoryControler = async (req: Request, res: Response): Promise<Response> => {

//     await deleteCategoryService(Number(req.params.id));

//     return res.status(204).send()

// }

