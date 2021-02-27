import mongoose from 'mongoose';

const bannersSchema=mongoose.Schema(
    [
        {
            url: String,
            position: Number,
            auto_scroll: Boolean
        }
    ]

)
export default mongoose.model("bannersDB",bannersSchema)