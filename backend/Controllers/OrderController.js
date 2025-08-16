const {OrderModel}=require("../models/OrderModel")
const {HoldingModel}=require("../models/HoldingModel")

module.exports.BuyOrder=async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    owner:req.user.id
  });
  newOrder.save();
  res.send("Order Saved!");
}

module.exports.SellOrder=async (req, res) => {
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
}

module.exports.AllOrder=async (req, res) => {
  let allOrders = await OrderModel.find({owner:req.user.id});
  res.json(allOrders);
}