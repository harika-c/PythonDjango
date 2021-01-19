import mongoose from 'mongoose';

const bannersSchema=mongoose.Schema(
    [
        {
            url: String,
            position: Number
        }
    ]

)
export default mongoose.model("bannersDB",bannersSchema)