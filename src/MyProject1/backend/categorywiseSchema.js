import mongoose from 'mongoose';

const clothesSchema =mongoose.Schema(
   [{ name: String,
      about: String ,
      url: String ,
      price: String
   }] 
)
const electronicdevicesSchema = mongoose.Schema(
   [{
      name: String , 
      about: String ,
      url: String 
   }]
)
const fruitsandvegiesSchema=mongoose.Schema(
   [{
      name: String,
      about: String  ,
      url: String 
   }]
)
const homeutensilsSchema=mongoose.Schema(
   [{
      name: String ,
      about: String  ,
      url: String 
   }]
)
const groceriesSchema=mongoose.Schema(
   [{
      name: String ,
      about: String  ,
      url: String 
   }]
)
export const clothesDB=  mongoose.model('clothesDB',clothesSchema);
export const electronicdevicesDB= mongoose .model('electronicdevicesDB',electronicdevicesSchema);
export const fruitsandvegiesDB= mongoose.model('fruitsandvegiesDB',fruitsandvegiesSchema);
export const groceriesDB=mongoose.model('groceriesDB',groceriesSchema);
export const homeutensilsDB=mongoose.model('homeutensilsDB',homeutensilsSchema);
