import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUserReq, tUserRes } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from '../../schemas/user.schema';


export const updateUserService = async (payload: tUserReq, idUser: number): Promise<tUserRes> => {


    const moviesRepository: Repository<User> = AppDataSource.getRepository(User);

    const oldUser: User | null = await moviesRepository.findOne({ where: { id: idUser } })

    const user: User = await moviesRepository.save({
        ...oldUser,
        ...payload
    });

    const userResponse: tUserRes = userSchemaResponse.parse(user)

    return userResponse

}