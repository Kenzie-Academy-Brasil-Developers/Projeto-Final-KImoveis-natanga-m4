
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Category } from '../../entities/categories.entity';
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../error/handleErros.errors';


export const categoryExistMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const category: Category | null = await categoryRepository.findOne({ where: { name: req.body.name } });

    if (category) {
        throw new AppError('Category already exists', 409)
    }

    next()
}
