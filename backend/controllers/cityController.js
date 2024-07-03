
import CityModel from "../models/cityModel.js";
import { errorHandler } from "../util/error.js";

export const addCity = async (req, res, next) => {

    try {

        const response = await CityModel.create(req.body);

        if (!response) {
            const error = errorHandler(500, 'Add CityFailed!', err.message);
            return next(error);
        }

        res.status(201).json({
            success: true,
            message: 'Add City Success!',
            data: response
        })



    } catch (err) {
        const error = errorHandler(500, 'Add City Failed!', err.message);
        next(error)
    }


}


export const getAllCity = async (req, res, next) => {
    try {

        const response = await CityModel.find();


        res.status(201).json({
            success: true,
            message: 'Get All City Success!',
            data: response
        })



    } catch (err) {
        const error = errorHandler(500, 'Get All City  Failed!', err.message);
        next(error)
    }
}

