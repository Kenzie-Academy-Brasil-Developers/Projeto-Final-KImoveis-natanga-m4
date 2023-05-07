
import { Request, Response, NextFunction } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from './../../entities/user.entity';
import { AppError } from './../../error/handleErros.errors';

export const verifyEmailExistMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const { email } = req.body

    if (email) {


        const userRepository: Repository<User> = AppDataSource.getRepository(User);

        const findUser: User | null = await userRepository.findOne({ where: { email: email } })

        if (findUser) {
            throw new AppError('Email already exists', 409)
        }

    }

    next()
}