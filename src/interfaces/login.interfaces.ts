import { z } from 'zod';
import { loginSchema } from './../schemas/login.schemas';

export type tLogin = z.infer<typeof loginSchema>
