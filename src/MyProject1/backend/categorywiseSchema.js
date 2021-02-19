
import mongoose from 'mongoose';
const signupSchema=mongoose.Schema(
   [{
      firstname: String ,
      password: String ,
      confirmpassword: String ,
      emailid : String  ,
      lastname : String ,
      mobilenumber: String,
      userid: String
   }]
)
const loginSchema=mongoose.Schema(
   [{
      username: String ,
      password: String 
   }]
)
const womensWearSchema =mongoose.Schema(
   [{ name: String,
      about: String ,
      url: String ,
      price: String
   }] 
)
const mensWearSchema=mongoose.Schema(
   [{
      name: String,
      about: String ,
      url: String,
      price : String
   }]
)
const kidsWearSchema=mongoose.Schema(
   [{
      name: String ,
      url: String ,
      about: String,
      price: String
   }]
)
const accessoriesSchema=mongoose.Schema(
   [{
      name: String ,
      about: String,
      url:String,
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

export const signupDB=mongoose.model('signupDB',signupSchema);
export const loginDB =mongoose.model('loginDB',loginSchema);
export const womensWearDB=  mongoose.model('womensWearDB',womensWearSchema);
export const mensWearDB=mongoose.model('mensWearDB',mensWearSchema);
export const kidsWearDB=mongoose.model('kidsWearDB',kidsWearSchema);
export const accessoriesDB=mongoose.model('accessoriesDB',accessoriesSchema);
export const electronicdevicesDB= mongoose .model('electronicdevicesDB',electronicdevicesSchema);
export const fruitsandvegiesDB= mongoose.model('fruitsandvegiesDB',fruitsandvegiesSchema);
export const groceriesDB=mongoose.model('groceriesDB',groceriesSchema);
export const homeutensilsDB=mongoose.model('homeutensilsDB',homeutensilsSchema);

