import express from 'express';
import { addUser, deleteUser, getAllUser, updateUser } from '../controllers/userController.js';



const userRouter = express.Router();


userRouter.post('/add-user', addUser);
userRouter.get('/get-all-user', getAllUser);
userRouter.put('/update-user/:userId', updateUser);
userRouter.delete('/delete-user/:userId', deleteUser);


export default userRouter;