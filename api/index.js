import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect("mongodb+srv://RahulKumavat:Rahul@shelter-estate.khqboix.mongodb.net/?retryWrites=true&w=majority&appName=SHELTER-ESTATE")
.then(() => {
    console.log('connected to MongoDB!');
})
.catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());

app.listen(5000, () => {
    console.log('server is running on port 5000!');
    }
);
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
