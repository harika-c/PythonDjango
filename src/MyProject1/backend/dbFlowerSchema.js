import mongoose from 'mongoose';


const dbFlowerSchema =mongoose.Schema({
    name: String ,
    about: String
})

export default mongoose.model('flowersandplants',dbFlowerSchema)