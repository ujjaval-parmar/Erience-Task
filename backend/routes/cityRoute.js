import express from 'express';
import { addCity, getAllCity } from '../controllers/cityController.js';


const cityRouter = express.Router();


cityRouter.post('/add-city', addCity);
cityRouter.get('/get-all-city', getAllCity);


export default cityRouter;

