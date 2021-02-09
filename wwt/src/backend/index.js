import express from 'express';
import mongoose from 'mongoose';

import cors from 'cors';
import bodyParser from 'body-parser';
import {wwtSearchDB} from './Schema.js';

const app=express();
const port= process.env.PORT || 8001
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}))
const connection_url ="mongodb+srv://myprojectown:L8MyTXRlLIvDGevC@cluster0.9qcp5.mongodb.net/flowers?retryWrites=true&w=majority"

mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
mongoose.set('useFindAndModify', false);
app.get('/contact_data',(req,res)=>{
    
    wwtSearchDB.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
app.post('/contact_data',(req,res)=>{
    const data=req.body
  
    wwtSearchDB.create(data,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})
app.put('/contact_data/:_id',(req,res)=>{
    console.log('id------',req.params._id)
    wwtSearchDB.findByIdAndUpdate(req.params._id)
    .then(val=>{
    val.role=req.body.role
    val.name=req.body.name
    val.address=req.body.address
    val.phones=req.body.phones
    val.email=req.body.email
    val.save(function(err,updatedObject){
        if(err){
           return res.status(500).send(err)
        }else{
        return res.status(201).send(val)
        }
    })
})
})

app.delete('/contact_data/:_id',(req,res)=>{
   
    wwtSearchDB.findByIdAndRemove(req.params._id,(err,data)=>{
        if(err){
            res.status(204).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.listen(port,()=>console.log(`server listening on port ${port}`))