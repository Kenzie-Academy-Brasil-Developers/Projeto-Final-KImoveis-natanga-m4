
import { Request } from 'express';
import { Response } from 'express';
import { tUserRes } from '../interfaces/user.interfaces';
import { createUserService } from '../services/users/createUser.service';
import { getAllUsersService } from '../services/users/getAllUsers.service';
import { updateUserService } from '../services/users/updateUser.service';
import { deleteUserService } from '../services/users/deleteUser.service';

export const schedulesControler = async (req: Request, res: Response): Promise<Response> => {

    const newUser: tUserRes = await createUserService(req.body);

    return res.status(201).json(newUser)

}

export const getAllschedulesControler = async (req: Request, res: Response): Promise<Response> => {

    const users: tUserRes[] = await getAllUsersService()

    return res.status(200).json(users)

}

