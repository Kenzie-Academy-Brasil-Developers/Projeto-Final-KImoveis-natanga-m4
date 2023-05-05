
import { Request, Response, NextFunction } from 'express';
import { AppError } from './../error/handleErros.errors';
import { Repository } from 'typeorm';
import { User } from './../entities/user.entity';
import { AppDataSource } from '../data-source';

export const checkIfUserIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction):Promise<void>=> {


    if (req.params.id) {

        const userRepository: Repository<User> = AppDataSource.getRepository(User);

        const user: User | null = await userRepository.findOne({ where: { id: Number(req.params.id) } });

        if (!user) {
            throw new AppError('User not found', 403)
        }

    }

    next()

}

