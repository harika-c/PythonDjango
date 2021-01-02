import  mongoose from  'mongoose';
import express from 'express';
import flowersandplants from './dbFlowerSchema.js';
import joi from 'joi';
import cors from 'cors';

const app=express();
const connection_url ="mongodb+srv://myprojectown:L8MyTXRlLIvDGevC@cluster0.9qcp5.mongodb.net/flowers?retryWrites=true&w=majority"
const port = process.env.PORT || 8001
app.use(express.json())
app.use(cors());

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

app.get('/plants/:id',(req,res)=>{
    const val=flowersandplants.findById(a=>a.id == req.params.id)
    // const str = CircularJSON.stringify(val);
    // JSON.parse(str)
    if (!val){
        res.status(404).send("data not found")
    }
    else{
        res.send(val)
    }
})

app.post("/plants",(req,res)=>{
    const dbFlower=req.body
    console.log("req body",req.body)
    const schema={
        name: joi.string().required().min(3),
        about: joi.string()
    }
    const result =joi.validate(req.body,schema)
    console.log("res----",result.error);
    if(result.error){
        return res.status(500).send(result.error.details[0].message)
    }
    flowersandplants.create(
        dbFlower, (err,data)=>{
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
app.listen(port , ()=> console.log(`listening on port ${port}`))