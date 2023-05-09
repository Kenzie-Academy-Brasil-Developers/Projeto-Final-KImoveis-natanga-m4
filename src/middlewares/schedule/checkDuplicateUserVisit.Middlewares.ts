import { Request, Response, NextFunction } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Schedule } from '../../entities';
import { AppError } from '../../error/handleErros.errors';


export const checkDuplicateUserVisitMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);

    const schedulesQueryBuilder = scheduleRepository.createQueryBuilder('schedule')

    const userVisit: Schedule | null = await schedulesQueryBuilder
        .where('schedule.user = :user', { user: res.locals.user.idUser })
        .andWhere('schedule.hour = :hour', { hour: req.body.hour })
        .getOne()
        
    if (userVisit) {
        throw new AppError('User schedule to this real estate at this date and time already exists', 409)
    }

    next()
}
