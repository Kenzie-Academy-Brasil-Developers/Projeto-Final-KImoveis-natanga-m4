import { Repository } from 'typeorm';
import { AppDataSource } from "../../data-source";
import { RealEstate } from '../../entities/realEstate.entity';

export const getAllRealEstateService = async (): Promise<RealEstate[]> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstate: RealEstate[] = await realEstateRepository.find({
        relations:{
            address:true
        }
    });

    return realEstate

}