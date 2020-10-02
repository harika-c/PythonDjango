import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from 'cors';
//App config
const app =express();
const port=process.env.PORT || 8001;
const connection_url='mongodb+srv://admin:6HpYu8zdSvwL7ved@cluster0.azp0d.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middlewwares
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

//API Endpoints
app.get('/',(req,res)=>res.status(200).send("Hello Clever Programmer"));
app.post('/tinder/cards',(req,res)=>{
    const dbCard=req.body;
    Cards.create(dbCard,(err,data)=>{
        if (err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data)
        }
    });
});
app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});

// Listener
app.listen(port,()=> console.log(`listening on localhost: ${port}`));