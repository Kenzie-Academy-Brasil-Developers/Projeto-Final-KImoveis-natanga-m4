
import { Request } from 'express';
import { Response } from 'express';
import { tUserRes } from '../interfaces/user.interfaces';
import { createUserService } from './../services/users/createUser.service';

export const createUserControler = async (req: Request, res: Response): Promise<Response> => {

    const newUser: tUserRes = await createUserService(req.body);

    return res.status(201).json(newUser)

}

export const getAllUserControler = async (req: Request, res: Response): Promise<Response> => {

    const users = getAllUserService()

    return res.status(200).json(users)

}

// export const updateUserControler = async (req: Request, res: Response): Promise<Response> => {

//     const idUser: number = Number(req.params.id)

//     const updateUser = await updateUserService(req.body, idUser)

//     return res.status(200).json(updateUser)

// }
// export const deleteUserControler = async (req: Request, res: Response): Promise<Response> => {

//     await destroyUserService(Number(req.params.id));

//     return res.status(204).send()

// }

