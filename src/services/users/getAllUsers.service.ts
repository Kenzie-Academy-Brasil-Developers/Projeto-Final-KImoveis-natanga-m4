import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUserReq, tUserRes } from "../../interfaces/user.interfaces";
import { usersSchemaResponse } from '../../schemas/user.schema';


export const getAllUsersService = async (): Promise<tUserRes[]> => {

    const moviesRepository: Repository<User> = AppDataSource.getRepository(User);

    const users: User[] = await moviesRepository.find();

    const userResponse: tUserRes[] = usersSchemaResponse.parse(users)

    return userResponse

}