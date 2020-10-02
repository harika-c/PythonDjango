const bodyParser = require('body-parser')
const express =require('express')
const Cors=require('Cors')
const mongoose=require('mongoose')
const User =require('./schemas/users')

const app =express();
const port=process.env.PORT || 8001;
const connection_url='mongodb+srv://Angular:R9vSed2XXhDUB50S@cluster0.wau2a.mongodb.net/aa?retryWrites=true&w=majority'


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
app.get('/',(req,res)=>res.status(200).send("angular db push"));
app.post('/api/register',(req,res)=>{
    const db=req.body;
    User.create(db,(err,data)=>{
        if (err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data)
        }
    });
});
app.post('/api/login',(req,res)=>{
    
    User.find((err,data)=>{
        console.log('...',data,'..error..',err)
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});

// Listener
app.listen(port,()=> console.log(`listening on localhost: ${port}`));