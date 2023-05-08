import { Request, Response, NextFunction } from 'express';
import { AppError } from './../../error/handleErros.errors';

export const isAdminMiddleware = (req: Request, res: Response, next: NextFunction): void => {

    if (!res.locals.user.admin) {
        throw new AppError('Insufficient permission', 403)
    }
    next()
}