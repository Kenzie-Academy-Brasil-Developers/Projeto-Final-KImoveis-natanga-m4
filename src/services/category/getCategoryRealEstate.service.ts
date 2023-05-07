import { AppDataSource } from '../../data-source';
import { Repository } from 'typeorm';
import { RealEstate } from './../../entities/realEstate.entity';

export const getCategoryRealEstateService = async (idCatecory: number): Promise<RealEstate[]> => {

    const categoryRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstateCategory: RealEstate[] = await categoryRepository.find({
        where: { category: idCatecory }
    });

    return realEstateCategory

}


