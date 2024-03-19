import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from "nodemailer";
import multer from 'multer';
import userSchema from './models/user';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.use('/test', (req, res, next) => {
//     res.send("testing");
// })

mongoose.connect('mongodb+srv://guthulaaditya:PaSsWoRdIsPaSsWoRd@cluster0.g38gipm.mongodb.net/DriveReady?retryWrites=true&w=majority&appName=AtlasApp')
.then(() => app.listen(4222))
.then(() => 
console.log("Connected to DataBase & Listening to localhost 4222"))
.catch((err) => console.log(err));


app.post('/addorder', async (req, res, next) => {
    const items = req.body.items;
    const billDetails = req.body.billDetails;

    const userData = new userSchema({
        items,
        billDetails
    });
    try {
        const result = await userData.save();
        res.status(200).json({msg : "Order Added"});
    } catch (err) {
        console.log(err);
        res.status(404).json({error : "Error Occured :("});
    }
    // console.log(req.body); 
});

app.get('/getorderdata', async (req, res, next) => {
    let ordersData;
    try{
        ordersData = await userSchema.find();
    } catch (err) {
        console.log(err);
    }
    if (!ordersData) {
        return res.status(404).json({message : "No Data Found"})
    }
    // console.log(ordersData)
    return res.status(200).json({ordersData})
})


// app.listen(4222)

// http://localhost:4222/test