import { z } from 'zod';
import { addressSchemaRequest, addressSchema } from './address.schemas';
import { categorySchema } from './categories.schema';

export const realEstateSchema = z.object({
    id: z.number(),
    sold: z.boolean().default(false),
    value: z.string().or(z.number()),
    size: z.number().int().positive(),
    category: categorySchema,
    address: addressSchema,
    createdAt: z.string(),
    updatedAt: z.string(),
})

export const realEstateSchemaRequest = realEstateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    category:true,
})    .extend({
    address: addressSchemaRequest,
    categoryId: z.number(),
})

