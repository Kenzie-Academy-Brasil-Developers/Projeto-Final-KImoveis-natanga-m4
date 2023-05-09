
import { Request, Response } from 'express';
import { ZodSchema } from 'zod';
import { NextFunction } from 'express';

export const validBodyMiddleware = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction):void=>{

    const validBody = schema.parse(req.body);

    req.body = validBody
    
    next()
}