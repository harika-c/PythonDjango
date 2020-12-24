const express=require("express");
const app=express();
const Joi= require("joi");
app.use(express.json());

const dreams=[
    {name: "good",id:1},
    {name: "nightmare",id:2},
    {name: "horror",id:3},
    {name: "thriller",id:4},
    {name: "suspense",id:5},
]



app.get("/",(req,res)=>{
    res.send([12,11,15,299,999]);
})
app.get("/api/dreams",(req,res)=>{
    res.send(dreams)
})
app.get("/api/dreams/:id",(req,res)=>{
    const value=dreams.find(d=>d.id ===parseInt(req.params.id))
    if(!value){
        res.status(404).send("data not found")
    }else{
        res.send(value)
    }
})
app.post('/api/dreams',(req,res)=>{
    const schema={
        name: Joi.string().min(3).required()
    }
    const result=Joi.validate(req.body,schema);
    console.log(result.error);
    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return
    }
    const dre={
        id: dreams.length+1,
        name: req.body.name
    }
    dreams.push(dre)
    res.send(dre)
})
app.put("/api/dreams/:id",(req,res)=>{
    const data=dreams.find(d=> d.id === parseInt(req.params.id))
    if(!data){
        res.status(404).send("data not found")
        return
    }
    const schema={
        name: Joi.string().min(4).required()
    }
    const result=Joi.validate(req.body,schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return
    }
    data.name=req.body.name
    res.send(data)


})

app.delete('/api/dreams/:id',(req,res)=>{
    const value=dreams.find(d=> d.id === parseInt(req.params.id))
    if(!value){
        res.status(404).send("data not found")
    }
    console.log(value)
    const index=dreams.indexOf(value);
    dreams.slice(index,1);
    res.send(value)
})


const port=process.env.PORT || 3000;
app.listen(port,()=> console.log(`Listening on port ${port} `))