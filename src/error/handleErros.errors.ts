import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'
export class AppError extends Error {
    statusCode: number
    constructor(message: string, statusCode: number = 400) {
        super(message)
        this.statusCode = statusCode
    }
}

export const handleErros = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    if (err instanceof ZodError) {
        return res.status(400).json({
            message: err.flatten().fieldErrors
        })
    }

    console.error(err)

    return res.status(500).json({
        message: 'Internal Server Error.'
    });

}