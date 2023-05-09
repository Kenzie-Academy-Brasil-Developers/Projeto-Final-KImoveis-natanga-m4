
import { Request, Response, NextFunction } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Schedule } from '../../entities';
import { AppError } from '../../error/handleErros.errors';


export const checkDuplicateUserVisitMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);

    const userVisit = scheduleRepository.createQueryBuilder('schedule')
        .where('schedule.user = :user', { user: res.locals.user.idUser })
        .andWhere('schedule.hour = :hour', { hour: req.body.hour })


    if (userVisit) {
        throw new AppError('Schedule already exists', 409)
    }

    next()
}
