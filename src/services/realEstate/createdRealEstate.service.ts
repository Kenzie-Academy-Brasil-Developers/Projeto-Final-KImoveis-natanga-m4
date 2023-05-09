import { Repository } from 'typeorm';
import { AppDataSource } from "../../data-source";
import { tRealEstate, tRealEstateReq } from "../../interfaces/real_estate.interfaces";
import { Address } from './../../entities/address.entity';
import { RealEstate } from './../../entities/realEstate.entity';
import { realEstateSchema } from './../../schemas/real_estate.schema';

export const createdRealEstateService = async (payload: tRealEstateReq): Promise<RealEstate> => {

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);

    

    const newAddress: Address = addressRepository.create(payload.address);

    await addressRepository.save(newAddress);

    const newRealEstate: tRealEstate = realEstateSchema.parse(payload)

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstate: RealEstate = realEstateRepository.create(newRealEstate);

    await realEstateRepository.save(realEstate);

    return realEstate

}