import { Request, Response } from 'express';
import { createdRealEstateService } from '../services/realEstate/createdRealEstate.service';
import { RealEstate } from './../entities/realEstate.entity';
import { getAllRealEstateService } from './../services/realEstate/getAllRealEstates.service';


export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const newRealEstate:RealEstate = await createdRealEstateService(req.body);

    return res.status(201).json(newRealEstate)

}

export const getAllRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const realEstate: RealEstate[] = await getAllRealEstateService()

    return res.status(200).json(realEstate)
}


