const mongoose=require("mongoose");
const HoldingSchema=require("../schemas/HoldingSchema");

const HoldingModel=new mongoose.model("Holding",HoldingSchema);
module.exports={HoldingModel};