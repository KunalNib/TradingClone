const {HoldingModel}=require("../models/HoldingModel");

module.exports.GetHoldings=async (req, res) => {
  let allHoldings = await HoldingModel.find({owner:req.user._id});

  res.json(allHoldings||[]);
}

module.exports.UpdateHoldings=async (req, res) => {
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
}