import { AppDataSource } from '../../data-source';
import { Category } from '../../entities';
import { tCategoryReq } from '../../interfaces/categories.interfaces'
import { Repository } from 'typeorm';

export const createCategoryService = async (payload: tCategoryReq): Promise<Category> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const category: Category = categoryRepository.create(payload);

    await categoryRepository.save(category);

    return category

}


