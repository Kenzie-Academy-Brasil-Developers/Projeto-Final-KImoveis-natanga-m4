
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Category } from '../../entities/categories.entity';
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../error/handleErros.errors';


export const categoryExistMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const category: Category[] = await categoryRepository.find({ where: { name: req.body.name } });

    if (category) {
        throw new AppError("Category already registered", 409)
    }

}
