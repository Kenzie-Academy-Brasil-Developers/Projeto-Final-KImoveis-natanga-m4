import { number, z } from 'zod';
import { addressSchema, addressSchemaRequest } from './address.schemas';
import { categorySchema } from './categories.schema';

export const realEstateSchema = z.object({
    id: z.number(),
    sold: z.boolean().default(false),
    value: z.string().or(z.number().positive()),
    size: z.number().int().positive(),
    category: categorySchema,
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
})

export const realEstateSchemaRequest = realEstateSchema.omit({
    id: true,
    sold: true,
}).extend({
    address: addressSchemaRequest,
    category: categorySchema,
})

