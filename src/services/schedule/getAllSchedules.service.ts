import { Repository } from 'typeorm';
import { AppDataSource } from "../../data-source";
import { Schedule } from '../../entities/schedules.entity';

export const getAllSchedulesService = async (): Promise<Schedule[]> => {

    const SchedulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);

    const Schedules: Schedule[] = await SchedulesRepository.find();

    return Schedules

}