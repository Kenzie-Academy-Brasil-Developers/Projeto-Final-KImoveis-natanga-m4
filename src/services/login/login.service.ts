import { Repository } from 'typeorm';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config'
import { AppDataSource } from '../../data-source';
import { tLogin } from '../../interfaces/login.interfaces'
import { AppError } from './../../error/handleErros.errors';
import { User } from './../../entities/user.entity';

export const loginService = async (payload: tLogin): Promise<string> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({ where: { email: payload.email } });

    if (!user) {
        throw new AppError('Invalid credentials', 401)
    }

    const machPassword: boolean = await compare(payload.password, user.password)

    if (!machPassword || user.deletedAt) {
        throw new AppError('Invalid credentials', 401)
    }

    const token: string = jwt.sign(
        {
            admin: user.admin,
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
            subject: String(user.id)
        }
    )

    return token
}