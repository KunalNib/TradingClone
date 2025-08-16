const {PositionModel}=require("../models/PositionModel")

module.exports.GetPositions=async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
}