import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/video.route.js'
dotenv.config();
const app = express();

app.listen(3000,()=>{
    console.log('server is running on port 3000');
}
);

app.use("/api/video", userRouter);