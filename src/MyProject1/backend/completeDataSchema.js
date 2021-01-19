import mongoose from 'mongoose';


const completeDataSchema =mongoose.Schema({
    clothes: [{
        name: String ,
        about: String
    }],
    electronicdevices: [{
        name: String ,
        about: String
    }],
    fruitsandvegies: [{
        name: String ,
        about: String
    }],
    groceries: [{
        name: String ,
        about: String
    }],
    homeutencils:[{
        name: String,
        about: String
    }]
   
})

export default mongoose.model('completedata',completeDataSchema)