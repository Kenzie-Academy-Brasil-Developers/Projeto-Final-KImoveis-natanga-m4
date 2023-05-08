import { z } from 'zod';
import { addressSchemaRequest } from './address.schemas';
import { categorySchema } from './categories.schema';

export const realEstateSchema = z.object({
    id: z.number(),
    sold: z.boolean().default(false),
    value: z.string().or(z.number().positive()),
    size: z.number().int().positive(),
    address: addressSchemaRequest,
    category: categorySchema,
    createdAt: z.string(),
    updatedAt: z.string(),
})

export const realEstateSchemaRequest = realEstateSchema.omit({
    id: true,
    sold: true

})