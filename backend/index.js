const bodyParser = require('body-parser')
const express =require('express')
const Cors=require('Cors')
const mongoose=require('mongoose')
const User =require('./schemas/users')
const session=require('express-session')

const app =express();
// const port=process.env.PORT || 8001;
const connection_url='mongodb+srv://Angular:R9vSed2XXhDUB50S@cluster0.wau2a.mongodb.net/aa?retryWrites=true&w=majority'

const {
    PORT=8001,
    
} = process.env
//Middlewwares
app.use(express.json());
app.use(Cors());
app.use(session({
    secret:'klklpoolaaaaaaaaaaaaaaasdssss',
    saveUninitialized:false,
    resave:false
    
}))
//DB Config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

//API Endpoints
app.get('/',(req,res)=>res.status(200).send("angular db push"));
app.post('/api/register',async(req,res)=>{
    const {username,password}=req.body
    console.log('////????///',req.body)
    const existingUser=await User.findOne({username})
    console.log('existing ....................................................',existingUser)
    if(existingUser){
        console.log('////////////////////////////////////////////////////////////inside///////////')
        res.json({
            success:false,
            message:"already in use"
        })
        return
    }
    const user=new User({
        username,
        password
    })
    const result=user.save()
    res.json({
        success:true,
        message:"welcome"
    })
});
app.post('/api/login',async(req,res)=>{
    console.log('????????????',req.body)
    const {username,password}=req.body;
    const resp1=await User.findOne({username,password})
        console.log('...',username,password,resp1,'..error..')
        if(!resp1){
            res.json({
                success:false,
                message:"Incorrect details"
            })
        }else{ 
            res.json({
                success:true,
                message:username
            })
            req.session.user=username;
            req.session.save();
            req.session.user.save();
            console.log('req.sess--'+req.session.user);
        }
});
app.get('/api/data',async(req,res)=>{
    console.log("req.session,,,"+req.session.user)
    const user=await User.findOne({ username: req.session.user})
    console.log('api/data iside--',user,req.session.user);
    if(!user){
        res.json({
            status:false,
            quote: 'User must be deleted'
        })
        return 
    }
    res.json({
        status:true,
        username:req.session.user,
        quote:user.quote
        
    })
    
})
app.get('/api/isloggedin',(req,res)=>{
    res.json({
        status: !!req.session.username
    })
})
// Listener
app.listen(PORT,()=> console.log(`listening on localhost: ${PORT}`));