import { z } from 'zod';
import { realEstateSchema, realEstateSchemaRequest } from '../schemas/realEstate.schema';

export type tRealEstate = z.infer<typeof realEstateSchema>

export type tRealEstateReq = z.infer<typeof realEstateSchemaRequest>