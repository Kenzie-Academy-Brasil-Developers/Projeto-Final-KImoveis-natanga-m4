import { z } from 'zod';
import { userSchema } from './user.schema';


export const schedulesSchema = z.object({
    id: z.number(),
    date: z.date(),
    hour: z.date(),
    realEstateId: z.number().int().positive(),
    user: userSchema,
})

export const schedulesSchemaRequest = schedulesSchema.omit({ id: true, user: true })

