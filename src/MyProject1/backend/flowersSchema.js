import mongoose from 'mongoose';

const flowersSchema =mongoose.Schema(
   [{ name: String,
      about: String 
   }] 
)
const grassSchema = mongoose.Schema(
   [{
      name: String , 
      about: String 
   }]
)
const insectSchema=mongoose.Schema(
   [{
      name: String,
      about: String 
   }]
)
const animationSchema=mongoose.Schema(
   [{
      name: String ,
      about: String 
   }]
)

export const flowersDB=  mongoose.model('flowersDB',flowersSchema);
export const grassDB= mongoose .model('grassDB',grassSchema);
export const insectDB= mongoose.model('insectDB',insectSchema);
export const animationDB=mongoose.model('animationDB',animationSchema);
