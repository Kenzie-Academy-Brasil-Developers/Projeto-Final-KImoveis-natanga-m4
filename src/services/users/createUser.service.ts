import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUserReq, tUserRes } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from './../../schemas/user.schema';


export const createUserService = async (payload: tUserReq): Promise<tUserRes> => {


    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User = userRepository.create(payload);

    await userRepository.save(user);

    const userResponse :tUserRes= userSchemaResponse.parse(user)
    
    return userResponse

}