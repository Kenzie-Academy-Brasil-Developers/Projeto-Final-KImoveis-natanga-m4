import { Repository } from 'typeorm';
import { AppDataSource } from "../../data-source";
import { RealEstate } from './../../entities/realEstate.entity';
import { Schedule } from './../../entities/schedules.entity';


export const getAllSchedulesService = async (id: number) => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstate: RealEstate | null = await realEstateRepository.findOne({
        relations: {
            address: true,
            category: true,
            schedules: {
                user: true
            }
        },
        where: {
            id: id
        }

    });

    return realEstate

}