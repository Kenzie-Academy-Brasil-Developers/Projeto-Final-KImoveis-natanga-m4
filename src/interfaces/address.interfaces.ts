import { z } from "zod";
import { addressSchema, addressSchemaRequest } from "../schemas/address.schemas";


export type tAddress = z.infer<typeof addressSchema>

export type tAddressReq = z.infer<typeof addressSchemaRequest>