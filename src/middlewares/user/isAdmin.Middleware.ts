import { Request, Response, NextFunction } from 'express';
import { AppError } from './../../error/handleErros.errors';

export const isAdminMiddleware = (req: Request, res: Response, next: NextFunction): void => {

    if (req.user.admin) {
        throw new AppError('Insufficient Permission', 403)
    }
    next()
}