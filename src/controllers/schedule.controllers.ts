import { Request, Response } from 'express';
import { tSchedules } from '../interfaces/schedule.interfaces';
import { createdScheduleService } from './../services/schedule/createdSchedule.service';
import { Schedule } from './../entities/schedules.entity';
import { getAllSchedulesService } from './../services/schedule/getAllSchedules.service';

export const createdSchedulesControler = async (req: Request, res: Response): Promise<Response> => {

    const newUser: Schedule = await createdScheduleService(req.body, Number(res.locals.user.idUser));

    return res.status(201).json({ message: 'Schedule created' })

}

export const getAllschedulesControler = async (req: Request, res: Response): Promise<Response> => {

    const users: Schedule[] = await getAllSchedulesService()

    return res.status(200).json(users)

}

