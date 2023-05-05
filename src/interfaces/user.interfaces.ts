import { z } from "zod";
import { userSchema, userSchemaRequests, userSchemaResponse } from "../schemas/user.schema";

export type tUser = z.infer<typeof userSchema>

export type tUserReq = z.infer<typeof userSchemaRequests>

export type tUserRes = z.infer<typeof userSchemaResponse>