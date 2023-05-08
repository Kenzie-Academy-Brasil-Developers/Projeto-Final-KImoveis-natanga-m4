import { AppDataSource } from '../../data-source';
import { Repository } from 'typeorm';
import { RealEstate } from './../../entities/realEstate.entity';
import { Category } from './../../entities/categories.entity';
import { AppError } from './../../error/handleErros.errors';

export const getCategoryRealEstateService = async (idCatecory: number): Promise<RealEstate[]> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const category: Category | null = await categoryRepository.findOne({
        where :{id:idCatecory}
    });

    if (!category) {
        throw new AppError('Category not foud',404)
    }

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstateCategory: RealEstate[] = await realEstateRepository.find({
        where: { category: category  }
    });

    return realEstateCategory

}


