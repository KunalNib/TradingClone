const {Schema} =require("mongoose");
const UserModel=require("../models/UserModel");

const HoldingSchema=new Schema({
    name:String,
    qty:Number,
    avg:Number,
    price:Number,
    net:String,
    day:String,
    owner:{
    type:Schema.Types.ObjectId,
      ref:"User",
    }
})

module.exports=HoldingSchema;