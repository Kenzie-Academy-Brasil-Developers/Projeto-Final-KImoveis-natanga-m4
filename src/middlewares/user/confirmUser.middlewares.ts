import { Request, Response, NextFunction } from 'express'
import { userSchemaUpdateNotAdmin } from '../../schemas/user.schema';
import { AppError } from './../../error/handleErros.errors';


export const confirmUser = (req: Request, res: Response, next: NextFunction) => {

    if (!res.locals.user.admin) {
        if (Number(req.params.id) != res.locals.user.idUser) {
            throw new AppError('Insufficient permission', 403)
        }
        const { body } = req

        req.body = userSchemaUpdateNotAdmin.parse(body)
    }

    next()

}

