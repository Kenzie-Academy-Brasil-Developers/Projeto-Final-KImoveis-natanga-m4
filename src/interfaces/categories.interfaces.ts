import { z } from "zod";
import { categorySchema, categorySchemaRequest } from '../schemas/categories.schema';


export type tCategory = z.infer<typeof categorySchema>

export type tCategoryReq = z.infer<typeof categorySchemaRequest>