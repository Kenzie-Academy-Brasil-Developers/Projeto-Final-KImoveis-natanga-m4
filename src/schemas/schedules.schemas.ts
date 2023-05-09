import { z } from 'zod';
import { userSchema } from './user.schema';


export const schedulesSchema = z.object({
    id: z.number(),
    date: z.date().refine((date) => {
        const validDate = new Date(date);
        const dayOfWeek = validDate.getDay();
        dayOfWeek >= 1 && dayOfWeek <= 5
    }),
    hour: z.string().refine((hour) => {
        const validHour: number = parseInt(hour.slice(0, 2));
        return validHour >= 8 && validHour <= 18
    }, {
        message: 'O horário deve estar entre 08:00 e 18:00.'
    }),
    realEstateId: z.number().int().positive(),
    user: userSchema,
})

export const schedulesSchemaRequest = schedulesSchema.omit({ id: true, user: true })

