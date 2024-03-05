import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectToDataBase = () => {
    mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Connected To DB Sucessfully....");
    })
    .catch((err) => {
        console.log(err);
    })
}
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 5000!');
  });  