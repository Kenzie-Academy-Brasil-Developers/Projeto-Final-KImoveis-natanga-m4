
import { Request, Response, NextFunction } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Schedule } from '../../entities';
import { AppError } from '../../error/handleErros.errors';
import { Address } from './../../entities/address.entity';
import { number, string } from 'zod';


export const validateUniqueAddressMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const { address } = req.body

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);

    const number: string = address.number == undefined ? "" : String(address.number)

    const findAddress: Address | null = await addressRepository.findOne({
        where: {
            state: address.state,
            city: address.city,
            zipCode: address.zipCode,
            street: address.street,
            number: number,
        }
    })

    if (findAddress) {
        throw new AppError('Address already exists', 409)
    }

    next()
}
