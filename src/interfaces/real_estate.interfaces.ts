import { z } from 'zod';
import { realEstateSchema, realEstateSchemaRequest } from '../schemas/real_estate.schema';


export type tRealEstate = z.infer<typeof realEstateSchema>

export type tRealEstateReq = z.infer<typeof realEstateSchemaRequest>