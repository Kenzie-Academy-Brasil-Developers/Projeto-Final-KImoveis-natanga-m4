import { Repository } from 'typeorm';
import { AppDataSource } from "../../data-source";
import { User } from '../../entities/user.entity';
import { tSchedules } from '../../interfaces/schedule.interfaces';
import { Schedule } from '../../entities/schedules.entity';

export const createdScheduleService = async (payload: tSchedules, userId: number) => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({ where: { id: userId } });

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);

    const newSchedule: Schedule = scheduleRepository.create({ ...payload, user: user! });

    await scheduleRepository.save(newSchedule);

    return newSchedule

}