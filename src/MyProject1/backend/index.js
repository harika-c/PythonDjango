import  mongoose from  'mongoose';
import express from 'express';
import crypto from 'crypto';
import joi from 'joi';
import cors from 'cors';
import bodyParser from 'body-parser';

import completedata from './completeDataSchema.js';
import {loginDB,signupDB,womensWearDB, electronicdevicesDB , fruitsandvegiesDB,groceriesDB,homeutensilsDB, mensWearDB, kidsWearDB, accessoriesDB, persistentCartLoggedInUserDB} from './categorywiseSchema.js';
import bannersDB from './bannersSchema.js';



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
             res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
         
    })
})

app.get('/mywebsite/clothes/womenswear',(req,res)=>{
    
    womensWearDB.find((err,data)=>{
        console.log('...res...data..',data);
        if(err){
             res.status(500).send(err)
        }
        else{ res.status(200).send(data)
        }
        
    })
})
app.get('/mywebsite/clothes/menswear',(req,res)=>{
    mensWearDB.find((err,data)=>{
        console.log('...res...data..',data);
        if(err){
            res.status(500).send(err)
       }
       else{ res.status(200).send(data)
       }
    })
})
app.get('/mywebsite/clothes/kidswear',(req,res)=>{
    kidsWearDB.find((err,data)=>{
        if(err){
            return res.status(500).send(err)
        }
        return res.status(200).send(data)
    })
})
app.get('/mywebsite/clothes/accessories',(req,res)=>{
    accessoriesDB.find((err,data)=>{
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
app.post('/mywebsite/cart',(req,res)=>{
    const data =req.body
    console.log('data.....',data);
    persistentCartLoggedInUserDB.findOne({user_data : {state:{emailid:data.user_data.emailid}}},(err,existingUser)=>{
        console.log('.....',existingUser,'...',existingUser=="")
        if(existingUser==""){
            persistentCartLoggedInUserDB.create(data,(err,newdata)=>{
                console.log('/////////',data,'//////',newdata)
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.status(201).send(newdata);
                }
            })
        }else{
            // persistentCartLoggedInUserDB.findOneAndUpdate
        }
    })
        
})
app.post('/mywebsite/signup',(req,res)=>{
    var data =req.body;
    // const id= crypto.randomBytes(16).toString("hex"); // user id code

    console.log('??????????????????????????',data,'...',data.emailid,',,')
    signupDB.findOne({emailid:data.emailid},(err,existingUser)=>{
        console.log('inside...............',existingUser)
        if(err){
            res.status(500).send(err)
        }else if (existingUser==null){
            // data.userid=id   // userid code 
            signupDB.create(data,(err,data)=>{
                if(err){
                    res.status(500).send(err)
                }
                console.log('.data....',data,';;;',data.userid)
                res.status(201).send(data)
            })
        } 
        else{
             res.send("user already exists")   
          }
    })
    
})
app.post('/mywebsite/login',(req,res)=>{
    const data=req.body;
    console.log('req.bosy.....',req.body)
    signupDB.findOne({emailid:req.body.username,password:req.body.password},(err,existingUser)=>{
        console.log("llllll",existingUser)
        if(existingUser==null){
            res.send("Invalid userId / password")
        }else{
            console.log('inside.....',existingUser)
            res.status(200).send(existingUser)
            
        }
    })

})
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
    womensWearDB.create(
        dbMywebsite, (err,data)=>{
            console.log(err,".....",req.body,data)
            if(err){
                res.status(500).send(err)
            }else {
                res.status(201).send(data)
            }
        })
})
app.post('/mywebsite/clothes/menswear',(req,res)=>{
    const db=req.body
    mensWearDB.create(
        db,(err,data)=>{
            if(err){
                return res.status(500).send(err)
            }
            return res.status(200).send(data)
        }
    )
})
app.post('/mywebsite/clothes/kidswear',(req,res)=>{
    const db=req.body
    kidsWearDB.create(
        db,(err,data)=>{
            if(err){
                return  res.status(500).send(err)
            }
            return res.status(200).send(data)
        }
    )
})
app.post('/mywebsite/clothes/accessories',(req,res)=>{
    const db=req.body
    accessoriesDB.create(db,(err,data)=>{
        if(err){
            return res.status(500).send(err)
        }
        return res.status(200).send(data)
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
app.delete('/mywebsite/banners/:id',(req,res)=>{
    bannersDB.findByIdAndDelete(req.params.id)
    .exec()
    .then(doc=>{
        console.log('....',doc)
        if(!doc)
            return res.status(404).end();
        return res.status(204).end();
    })
})
//////////////////////////////////////////////-----PUT------/////////////////////////////////////////
app.put('/mywebsite/banners',(req,res)=>{
    var updatedData="";
    var headersAgain=false;
    for(let i =0;i<req.body.length;i++){
        console.log('headersAgain......',headersAgain)
        
        console.log('bulk data',req.body[i]._id,i)
        bannersDB.findByIdAndUpdate(req.body[i]._id)
        .then(val=>{
            val.url=req.body[i].url
            val.position=req.body[i].position
            val.auto_scroll=req.body[i].auto_scroll
            updatedData=val+updatedData
            console.log('inside val.....',updatedData)
            
            val.save((err,updatedObject)=>{
                console.log('inside save.....',updatedData)
                if(err){
                    return res.status(500).send(err)
                }else{
                    if(!headersAgain==true){
                        headersAgain=true
                        return res.status(201).send(updatedData)
                    }
                }
            })
        })
    }
    
})
app.put('/mywebsite/banners/:id',(req,res)=>{
    console.log('banners params',req.params.id)
    console.log('banners params',req.body,req.body.url)
    bannersDB.findByIdAndUpdate(req.params.id)
    .then(val=>{
        val.url=req.body.url
        val.position=req.body.position
        val.auto_scroll =req.body.auto_scroll
        console.log('.....',req.body.url,req.body.position)
        val.save(function(err,updatedObject){
            console.log(',,,',updatedObject)
            if(err) 
                return res.status(500).send(err)
            return res.status(201).send(updatedObject)
        })
    })
})

app.put('/mywebsite/clothes/womenswear/:id',(req,res)=>{
    womensWearDB.findByIdAndUpdate(req.params.id)
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