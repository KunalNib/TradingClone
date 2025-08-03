const mongoose =require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema=require("../schemas/UserSchema");


let UserModel=mongoose.model("User",userSchema);

module.exports={UserModel};