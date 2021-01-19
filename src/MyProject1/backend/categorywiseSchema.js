import mongoose from 'mongoose';

const clothesSchema =mongoose.Schema(
   [{ name: String,
      about: String 
   }] 
)
const electronicdevicesSchema = mongoose.Schema(
   [{
      name: String , 
      about: String 
   }]
)
const fruitsandvegiesSchema=mongoose.Schema(
   [{
      name: String,
      about: String 
   }]
)
const homeutensilsSchema=mongoose.Schema(
   [{
      name: String ,
      about: String 
   }]
)
const groceriesSchema=mongoose.Schema(
   [{
      name: String ,
      about: String 
   }]
)
export const clothesDB=  mongoose.model('clothesDB',clothesSchema);
export const electronicdevicesDB= mongoose .model('electronicdevicesDB',electronicdevicesSchema);
export const fruitsandvegiesDB= mongoose.model('fruitsandvegiesDB',fruitsandvegiesSchema);
export const groceriesDB=mongoose.model('groceriesDB',groceriesSchema);
export const homeutensilsDB=mongoose.model('homeutensilsDB',homeutensilsSchema);
