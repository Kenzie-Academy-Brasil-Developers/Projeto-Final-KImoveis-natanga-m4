import { z } from 'zod';

export const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().default(false),
    password: z.string().max(120),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().optional().nullable()
});

export const userSchemaRequests = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
});

export const userSchemaUpdate = userSchema.omit({
    id: true,
    admin:true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
}).partial();

export const userSchemaUpdateNotAdmin  = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
}).partial();

export const userSchemaResponse = userSchema.omit({
    password: true,
});

export const usersSchemaResponse = userSchemaResponse.array();