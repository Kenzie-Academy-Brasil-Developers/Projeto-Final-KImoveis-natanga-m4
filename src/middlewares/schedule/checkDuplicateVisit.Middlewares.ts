
import { Request, Response, NextFunction } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Schedule } from '../../entities';
import { AppError } from '../../error/handleErros.errors';


export const checkDuplicateVisitMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);

    const schedule: Schedule | null = await scheduleRepository.findOne({ where: { hour: req.body.hour } });

    if (schedule) {
        throw new AppError('Schedule already exists', 409)
    }

    next()
}
