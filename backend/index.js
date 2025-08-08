require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const { HoldingModel } = require("./models/HoldingModel");
const { PositionModel } = require("./models/PositionModel");
const { OrderModel } = require("./models/OrderModel");
const { Signup, Login } = require("./Controllers/AuthController");
const cookieParser = require("cookie-parser");
const { userVerification } = require("./Middlewares/AuthMiddleware");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./models/UserModel");
const authMiddleware = require("./Middlewares/AuthMiddleware");

const PORT = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5174",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongoUrl);
}


app.get("/auth",authMiddleware, (req, res) => {
  res.json({ loggedIn: true, user: req.user.username });
});


app.get("/allHoldings",authMiddleware, async (req, res) => {
  let allHoldings = await HoldingModel.find({owner:req.user._id});

  res.json(allHoldings||[]);
});


app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.post("/updateHoldings",authMiddleware, async (req, res) => {
  try{
    const name = req.body.name;
  const price = req.body.price;
  const qty = req.body.qty;
  let existingData = await HoldingModel.findOne({ name: name,owner:req.user.id });
  if (existingData && Number(price) === existingData.price) {
    existingData.qty += qty;
    await existingData.save();
  } else {
    let newHolding = new HoldingModel({
      name: name,
      qty: qty,
      avg: existingData?existingData.avg:price,
      price: price,
      net: existingData?existingData.net:"0",
      day: existingData?existingData.day:"0",
      owner:req.user._id
    });
    await newHolding.save();
  }
  res.send("Successful");
  }catch(err){
    console.log(err);
  }
});

app.post("/signup", Signup);
app.post("/login", Login);

app.post("/BuyOrder",authMiddleware, async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    owner:req.user.id
  });
  newOrder.save();
  res.send("Order Saved!");
});

app.post("/SellOrder",authMiddleware, async (req, res) => {
  let name = req.body.name;
  let price = req.body.price;
  let sellOrder = new OrderModel({
    name: name,
    qty: req.body.qty,
    price: price,
    mode: req.body.mode,
    owner:req.user.id
  });

  let Holding = await HoldingModel.findOne({ name, price,owner:req.user.id });
  if (!Holding) return res.json({status:false,message:"No Stock found"});
  if (Holding.qty == 1) {
    await HoldingModel.deleteOne({ name, price });
  } else {
    Holding.qty -= 1;
    await Holding.save();
  }
  await sellOrder.save();
  res.json({status:true,message:"Order Saved"});
});

app.get("/allOrders",authMiddleware, async (req, res) => {
  let allOrders = await OrderModel.find({owner:req.user.id});
  res.json(allOrders);
});

app.listen(PORT, () => {
  console.log("app is listening on port 3000");
});
