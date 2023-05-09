
import { Request, Response, NextFunction } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Schedule } from '../../entities';
import { AppError } from '../../error/handleErros.errors';
import { RealEstate } from './../../entities/realEstate.entity';


export const realEstateScheduleFilterMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const realEstateId = req.body.realEstateId != undefined ? req.body.realEstateId : req.params.id

    const  realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstate: RealEstate | null = await realEstateRepository.findOne({
        where: {
            id: parseInt(realEstateId)
        }
    })

    if (!realEstate) {
        throw new AppError('RealEstate not found', 404)
    }


    next()
}
