require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const { HoldingModel } = require("./models/HoldingModel");
const {PositionModel}=require("./models/PositionModel");

const PORT = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.listen(PORT, () => {
  console.log("app is listening on port 3000");
});
