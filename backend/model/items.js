import mongoose, { Schema } from "mongoose";

const itemModel = new Schema({
    titel: {
        type:String,
        required: true
    },
    room: {
        type:String,
        required:true
    },
    imageUrl:{
        type: String,
        // required:true
    },
    text:{
        type: String,
        required:true
    },
    size:{
        type: String,
        required:true
    }
})

export const Item = mongoose.model('Item', itemModel)