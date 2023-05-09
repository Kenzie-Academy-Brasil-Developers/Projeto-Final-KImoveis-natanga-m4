import { Repository } from 'typeorm';
import { AppDataSource } from "../../data-source";
import { tSchedules } from '../../interfaces/address.interfaces copy';
import { User } from '../../entities/user.entity';

export const createdScheduleService = async (payload: tSchedules, userId: number) => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({ where: { id: userId } });

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Schedule);

    const newAddress: Address = addressRepository.create(payload.address);

    await addressRepository.save(newAddress);

    const newSchedule: tSchedule = ScheduleSchema.parse(payload)

    const ScheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);

    const Schedule: Schedule = ScheduleRepository.create(newSchedule);

    await ScheduleRepository.save(Schedule);

    return Schedule

}