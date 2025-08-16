const mongoose=require("mongoose");

const PositionSchema=new mongoose.Schema({
    product:String,
    name:String,
    qty:Number,
    avg:Number,
    price:Number,
    net:String,
    day:String,
    isLoss:Boolean,
    owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
})

module.exports= PositionSchema;