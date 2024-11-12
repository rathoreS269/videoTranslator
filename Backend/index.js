import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/video.route.js'
dotenv.config();
const app = express();

app.use(express.json());

app.listen(3000,()=>{
    console.log('server is running on port 3000');
}
);

app.use("/api/video", userRouter);


app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    })
})