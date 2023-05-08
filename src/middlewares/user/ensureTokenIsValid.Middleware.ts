import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';
import { AppError } from './../../error/handleErros.errors';

export const ensureTokenIsValidMiddleware = (req: Request, res: Response, next: NextFunction): void => {

    let token = req.headers.authorization;

    if (!token) {
        throw new AppError('Missing bearer token', 401);
    }

    token = token.split(' ')[1];

    jwt.verify(token, process.env.SECRET_KEY!, (err, decode: any) => {

        if (err) {
            throw new AppError(err.message, 401)
        }

        res.locals.user = {
            admin: decode.admin,
            idUser: decode.sub,
        }
    })

    next()
}