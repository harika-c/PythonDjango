import mongoose from 'mongoose';

const schemaData=mongoose.Schema({
    
        
        role: String,
        name: String,
        email: String,
        phones: String,
        address: String,
    
})

export const wwtSearchDB=mongoose.model('wwtSearchDB',schemaData);