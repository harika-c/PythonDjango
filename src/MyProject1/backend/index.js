import  mongoose from  'mongoose';
import express from 'express';
import flowersandplants from './dbFlowerSchema.js';
import {flowersDB, grassDB , insectDB,animationDB} from './flowersSchema.js';

import joi from 'joi';
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

app.get("/plants",(req,res)=>{
    flowersandplants.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
app.get('/plants/flower',(req,res)=>{
    
    flowersDB.find((err,data)=>{
        console.log('...res...data..',data);
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
app.get('/plants/grass',(req,res)=>{
    grassDB.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
app.get('/plants/insect',(req,res)=>{
    insectDB.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
})
app.get('/plants/animation',(req,res)=>{
    animationDB.find((err,data)=>{
        if(err){
            res.status(500).send(data)
        }else{
            res.send(200).send(data)
        }
    })  
})
app.get('/plants/:id',(req,res)=>{
    flowersandplants.findById(req.params.id)
    .then(
        val=> {
        if (!val){
        res.status(404).send("data not found")
        }
        else{
            console.log("inside get function...")
            return res.send(val)
        }
    })
    .then(console.log('hell0 then 222222'))
    .catch(err=> console.log("error is ...",err))
    // const str = CircularJSON.stringify(val);
    // JSON.parse(str)
    
})

app.post('/plants/flower',(req,res)=>{
    const dbFlower=req.body
    flowersDB.create(
        dbFlower, (err,data)=>{
            console.log(err,".....",req.body,data)
            if(err){
                res.status(500).send(err)
            }else {
                res.status(201).send(data)
            }
        })
})
app.post('/plants/grass',(req,res)=>{
    const dbFlower=req.body
    grassDB.create(
        dbFlower,(err,data)=>{
            if(err){ 
                res.status(500).send(err)
            }
            else {
                res.status(201).send(data)
            }
        }
    )
})
app.post('/plants/insect',(req,res)=>{
    const dbFlower=req.body
    insectDB.create(dbFlower,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})
app.post('/plants/animation',(req,res)=>{
    const dbFlower=req.body 
    animationDB.create(dbFlower,(err,data)=>{
        if(err){
            res.status(500).send(data)
        }else{
            res.status(201).send(data)
        }
    })    
})
app.post("/plants",(req,res)=>{
    const dbFlower=req.body
    console.log("req body",req.body)
    let s1=joi.object().keys({
        name:joi.string().required(),
        about:joi.string().required(),
        _id:joi.string()
    })
    let s2=joi.array().items(s1)
    let s3=joi.object().keys({
        flower: s2,
        insects: s2,
        grass: s2,
        animation:s2
    })

    const result =joi.validate(req.body,s3)
    console.log("res----",result.error);
    if(result.error){
        return res.status(500).send(result.error.details[0].message)
    }
    flowersandplants.create(
        dbFlower, (err,data)=>{
            console.log(err,'....',data)
            if(err){
                res.status(500).send(err)
            }else {
                res.status(201).send(data)
            }
        })

})

app.delete('/plants',(req,res)=>{
    console.log("flowersandplants...",req.flowersandplants)
    flowersandplants.findOneAndDelete(req.params.name)
    .exec()
    .then(doc=>{
        if(!doc){
            return res.status(404).end();
        }
        return res.status(204).end();
    })
    .catch(err=>console.log(err))
    //  flowersandplants==(req.params.name)
})
app.put('/plants/:id',(req,res)=>{
    
    flowersandplants.findByIdAndUpdate(req.params.id)
    .then(val=>{
        const schema={
            name: joi.string().required(),
            about: joi.string().required()
        }
        const result=joi.validate(req.body,schema);
        if(!result){
            return res.status(404).send(result.error)
        }
        val.name=req.body.name
        val.about=req.body.about
        console.log("hhhhh")
        val.save(function(err,updatedObject){
            if(err){
                return res.status(500).send();
            }
            return res.status(201).send(val);
        })
        
    })
    .then(console.log("data is sent"))
    .catch(err=>console.log(err))
})

app.listen(port , ()=> console.log(`listening on port ${port}`))