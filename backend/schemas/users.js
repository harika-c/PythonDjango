const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    email:String,
    password: String,
    quote: String 
})

const user=mongoose.model('user',userSchema)

module.exports=user

