import { hashSync } from "bcryptjs";
import { z } from "zod";

export const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean(),
    password: z.string().max(120).transform((pass) =>
        hashSync(pass,10)
    ),
});

export const userSchemaRequests = userSchema.omit({ id: true });

export const userSchemaResponse = userSchema.omit({ password: true });