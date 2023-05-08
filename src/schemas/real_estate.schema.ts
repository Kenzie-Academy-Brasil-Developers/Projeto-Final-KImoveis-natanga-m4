import { z } from 'zod';
import { addressSchemaRequest } from './address.schemas';


export const realEstateSchema = z.object({
    id: z.number(),
    sold: z.boolean().default(false),
    value: z.union([z.string(), z.number()]),
    size: z.number().min(0).max(999999999),
    address: addressSchemaRequest,
    categoryId: z.number()
})

export const realEstateSchemaRequest = realEstateSchema.omit({ id: true, sold: true })