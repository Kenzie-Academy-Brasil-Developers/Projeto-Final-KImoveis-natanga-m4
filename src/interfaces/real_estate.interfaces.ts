import { z } from 'zod';
import { realEstateSchema, realEstateSchemaRequest } from '../schemas/real_estate.schema';


export type tRealState = z.infer<typeof realEstateSchema>

export type tRealStateReq = z.infer<typeof realEstateSchemaRequest>