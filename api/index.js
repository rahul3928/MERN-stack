import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect("mongodb+srv://RahulKumavat:Rahul@shelter-estate.khqboix.mongodb.net/?retryWrites=true&w=majority&appName=SHELTER-ESTATE")
.then(() => {
    console.log('connected to MongoDB!');
})
.catch((err) => {
    console.log(err);
});

const app = express();

app.listen(5000, () => {
    console.log('server is running on port 5000!');
    }
)