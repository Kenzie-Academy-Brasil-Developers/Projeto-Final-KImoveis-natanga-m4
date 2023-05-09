
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from './../../entities/user.entity';

export const deleteUserService = async (userId: number): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOneBy({
        id: userId,
    })

    await userRepository.softRemove(user!);

}