



import UserModel from "../models/userModel.js";
import { errorHandler } from "../util/error.js";

export const addUser = async (req, res, next) => {


    try {

        const response = await UserModel.create(req.body);

        if (!response) {
            const error = errorHandler(500, 'Add User Product Failed!', err.message);
            return next(error);
        }

        res.status(201).json({
            success: true,
            message: 'Add User Success!',
            data: response
        })



    } catch (err) {
        const error = errorHandler(500, 'Add User Failed!', err.message);
        next(error)
    }


}


export const getAllUser = async(req, res, next)=>{
    try{

        const response = await UserModel.find().sort({ createdAt: -1});

        res.status(200).json({
            success: true,
            message: 'Get Users Success!',
            data: response
        })



    }catch(err){
        const error = errorHandler(500, 'Get Users Failed!', err.message);
        next(error)
    }
}



export const updateUser = async(req, res, next)=>{
    try{

        

        

       

        const response = await UserModel.findByIdAndUpdate(req.params.userId, req.body, {
            new: true
        });

        

        

        res.status(200).json({
            success: true,
            message: 'Update User Success!',
            data: response
        })

    }catch(err){
        const error = errorHandler(500, 'Update User Failed!', err.message);
        next(error);
    }
}


export const deleteUser = async(req, res, next)=>{
    try{

        

        

       

        const response = await UserModel.findByIdAndDelete(req.params.userId);

        

        

        res.status(200).json({
            success: true,
            message: 'Delete User Success!',
            data: response
        })

    }catch(err){
        const error = errorHandler(500, 'Delete User Failed!', err.message);
        next(error);
    }
}