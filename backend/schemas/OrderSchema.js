const mongoose=require("mongoose");
const {UserModel}=require("../models/UserModel");
const OrderSchema= new mongoose.Schema({
    name:String,
    qty:Number,
    price:Number,
    mode:String,
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

module.exports=OrderSchema;
