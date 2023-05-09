import { Repository } from 'typeorm';
import { AppDataSource } from "../../data-source";
import {  tRealEstateReq } from "../../interfaces/real_estate.interfaces";
import { Address } from './../../entities/address.entity';
import { RealEstate } from './../../entities/realEstate.entity';
import { Category } from './../../entities/categories.entity';

export const createdRealEstateService = async (payload: tRealEstateReq): Promise<RealEstate> => {

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);

    const newAddress: Address = addressRepository.create(payload.address);

    await addressRepository.save(newAddress);

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);
    
    const category: Category|null = await categoryRepository.findOne({
        where: {
            id:payload.categoryId
        }});
        
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
    
    const realEstate: RealEstate = realEstateRepository.create({
        size: payload.size,
        address: newAddress,
        value:payload.value,
        sold:payload.sold,
        category: category!,
    });
    
    await realEstateRepository.save(realEstate);
    
    return realEstate

}