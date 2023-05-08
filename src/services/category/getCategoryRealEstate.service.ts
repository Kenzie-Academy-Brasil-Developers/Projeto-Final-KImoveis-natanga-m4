import { AppDataSource } from '../../data-source';
import { Repository } from 'typeorm';
import { Category } from './../../entities/categories.entity';
import { AppError } from './../../error/handleErros.errors';

export const getCategoryRealEstateService = async (idCatecory: number): Promise<Category> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const category: Category | null = await categoryRepository.findOne({
        relations: {
            realEstate:true  
        },
        where: { id: idCatecory }
    });

    if (!category) {
        throw new AppError('Category not found', 404)
    }

    return category

}