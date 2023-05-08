
import { Request, Response } from 'express';
import { Schema } from 'zod';
import { NextFunction } from 'express';

export const validBodyMiddleware = (schema: Schema) => (req: Request, res: Response, next: NextFunction):void=>{

    const validBody = schema.parse(req.body);

    req.body = validBody
    
    next()
}