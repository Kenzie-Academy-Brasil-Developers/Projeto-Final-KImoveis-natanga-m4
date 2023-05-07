
import { Category } from './../../entities/categories.entity';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';

export const getAllCategorysService = async (): Promise<Category[]> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const category: Category[] =await categoryRepository.find();

    return category

}


