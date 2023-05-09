import { z } from 'zod';
import { schedulesSchema, schedulesSchemaRequest } from '../schemas/schedules.schemas';


export type tSchedules = z.infer<typeof schedulesSchema>

export type tSchedulesReq = z.infer<typeof schedulesSchemaRequest>