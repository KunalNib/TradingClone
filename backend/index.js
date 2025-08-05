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

const PORT = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5174'],
  credentials: true
}));
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


app.post("/",userVerification)

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.post("/updateHoldings", async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const qty = req.body.qty;
  let existingData = await HoldingModel.findOne({name:name});
  if (existingData && price == existingData.price) {
    existingData.qty += qty;
    existingData.save();
  } else {
    let newHolding = new HoldingModel({
      name: name,
      qty: qty,
      avg: existingData.avg || price,
      price: price,
      net: existingData.net || "0",
      day: existingData.day || "0",
    });
    newHolding.save();
  }
  res.send("Successful");
});

app.post("/signup",Signup);
app.post("/login",Login);

app.post("/BuyOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order Saved!");
});


app.post("/SellOrder", async (req, res) => {
  let name=req.body.name;
  let price=req.body.price;
  let sellOrder= new OrderModel({
    name:name,
    qty:req.body.qty,
    price:price,
    mode:req.body.mode
  })

  let Holding= await HoldingModel.findOne({name,price});
  if(!Holding) return res.send("No Stock found");
  if(Holding.qty==1){
    await HoldingModel.deleteOne({name,price});
  }
  else{
    Holding.qty-=1;
    await Holding.save();
  }
  await sellOrder.save();
  res.send("Order Saved");
});

app.get("/allOrders",async (req,res)=>{
  let allOrders=await OrderModel.find({});
  res.json(allOrders);
})


app.listen(PORT, () => {
  console.log("app is listening on port 3000");
});
