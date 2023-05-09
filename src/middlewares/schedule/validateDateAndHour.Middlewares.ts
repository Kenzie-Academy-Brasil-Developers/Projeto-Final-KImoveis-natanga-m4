import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../error/handleErros.errors';


export const validateDateAndHourMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { date, hour } = req.body

    const validHour: number = parseInt(hour.slice(0, 2));

    if (validHour < 8 || validHour >= 18) {
        throw new AppError('Invalid hour, available times are 8AM to 18PM', 400);
    }

    const validDate = new Date(date);

    const dayOfWeek = validDate.getDay();

    if (dayOfWeek < 1 || dayOfWeek > 5) {
        throw new AppError('Invalid date, work days are monday to friday', 400);
    }

    next()
}
