import mongoose from 'mongoose';


const dbFlowerSchema =mongoose.Schema({
    flower: [{
        name: String ,
        about: String
    }],
    insects: [{
        name: String ,
        about: String
    }],
    grass: [{
        name: String ,
        about: String
    }],
    animation: [{
        name: String ,
        about: String
    }],
   
})

export default mongoose.model('flowersandplants',dbFlowerSchema)