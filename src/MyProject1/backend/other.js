import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();
const connection_url ="mongodb+srv://myprojectown:L8MyTXRlLIvDGevC@cluster0.9qcp5.mongodb.net/flowers?retryWrites=true&w=majority"
const port = process.env.PORT || 8001
app.use(express.json())
app.use(cors());
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
  
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
})




