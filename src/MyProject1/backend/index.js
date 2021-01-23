import  mongoose from  'mongoose';
import express from 'express';
import completedata from './completeDataSchema.js';
import {clothesDB, electronicdevicesDB , fruitsandvegiesDB,groceriesDB,homeutensilsDB} from './categorywiseSchema.js';
import bannersDB from './bannersSchema.js';

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
app.get('/mywebsite/banners',(req,res)=>{
    bannersDB.find((err,data)=>{
        if(err){
            return res.status(500).send(err)
        }
        return res.status(200).send(data)
    })
})
app.get("/mywebsite",(req,res)=>{
    completedata.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
app.get('/mywebsite/clothes/womenswear',(req,res)=>{
    
    clothesDB.find((err,data)=>{
        console.log('...res...data..',data);
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
app.get('/mywebsite/electronicdevices',(req,res)=>{
    electronicdevicesDB.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
app.get('/mywebsite/fruitsandvegies',(req,res)=>{
    fruitsandvegiesDB.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
})
app.get('/mywebsite/groceries',(req,res)=>{
    groceriesDB.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })  
})
app.get('/mywebsite/homeutensils',(req,res)=>{
    homeutensilsDB.find((err,data)=>{
        if(err){
            return res.status(500).send(err)
        }
        return res.status(200).send(data)
    })
})
app.get('/mywebsite/:id',(req,res)=>{
    completedata.findById(req.params.id)
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
//////////////////////////////////////////////////////////----POST---////////////////////////////////
app.post('/mywebsite/banners',(req,res)=>{
    const data=req.body;
    bannersDB.create(data,(err,data)=>{
        if(err){
            return res.status(500).send(err)
        }
        return res.status(201).send(data)
    })
})
app.post('/mywebsite/clothes/womenswear',(req,res)=>{
    const dbMywebsite=req.body
    clothesDB.create(
        dbMywebsite, (err,data)=>{
            console.log(err,".....",req.body,data)
            if(err){
                res.status(500).send(err)
            }else {
                res.status(201).send(data)
            }
        })
})
app.post('/mywebsite/electronicdevices',(req,res)=>{
    const dbMywebsite=req.body
    electronicdevicesDB.create(
        dbMywebsite,(err,data)=>{
            if(err){ 
                res.status(500).send(err)
            }
            else {
                res.status(201).send(data)
            }
        }
    )
})
app.post('/mywebsite/fruitsandvegies',(req,res)=>{
    const dbMywebsite=req.body
    fruitsandvegiesDB.create(dbMywebsite,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})
app.post('/mywebsite/groceries',(req,res)=>{
    console.log("inside backend post call plants/animation",req.body);
    const dbMywebsite=req.body 
    groceriesDB.create(dbMywebsite,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })    
})
app.post('/mywebsite/homeutensils',(req,res)=>{
    const dbMywebsite=req.body
    homeutensilsDB.create(dbMywebsite,(err,data)=>{
        if(err){
            return res.status(500).send(err)
        }
        return res.status(201).send(data)
    })

})
app.post("/mywebsite",(req,res)=>{
    const dbMywebsite=req.body
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
    completedata.create(
        dbMywebsite, (err,data)=>{
            console.log(err,'....',data)
            if(err){
                res.status(500).send(err)
            }else {
                res.status(201).send(data)
            }
        })

})

app.delete('/mywebsite',(req,res)=>{
    console.log("mywebsite...",req.flowersandplants)
    completedata.findOneAndDelete(req.params.name)
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
//////////////////////////////////////////////-----PUT------/////////////////////////////////////////
app.put('/mywebsite/clothes/womenswear/:id',(req,res)=>{
    clothesDB.findByIdAndUpdate(req.params.id)
    .then(val=>{console.log('............',val,'data......................')
        val.name=req.body.name
        val.about=req.body.about
        val.url=req.body.url
        val.price=req.body.price    
        val.save(function(err,updatedObject){
            if(err){
               return res.status(500).send(err)
            }
            return res.status(201).send(val)

        })
    })
})
app.put('/mywebsite/:id',(req,res)=>{
    
    completedata.findByIdAndUpdate(req.params.id)
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
                return res.status(500).send(err);
            }
            return res.status(201).send(val);
        })
        
    })
    .then(console.log("data is sent"))
    .catch(err=>console.log(err))
})

app.listen(port , ()=> console.log(`listening on port ${port}`))