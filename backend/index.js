import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { errorHandler } from './util/error.js';
import cityRouter from './routes/cityRoute.js';
import userRouter from './routes/userRoute.js';

dotenv.config();


const app = express();

app.use(express.json({limit: '50mb'}));

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);

    next();
});


app.use('/api', cityRouter);
app.use('/api', userRouter);




app.use('*', (req, res, next) => {

    const error = errorHandler(404, 'Not Found ' + req.originalUrl + ' on this server!')

    next(error);

});


app.use((err, req, res, next) => {
    // console.log(err)
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!';
    const error = err.error || undefined;

    console.log(err)

    res.status(statusCode).json({
        success: false,
        message,
        error
    })

})

mongoose.connect(process.env.DATABASE)
    .then(() => console.log('DB connected!'))
    .catch(err => console.log('DB connect Failed!: ', err));



app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
})