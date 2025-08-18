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
const { GetHoldings, UpdateHoldings } = require("./Controllers/HoldingController");
const { GetPositions } = require("./Controllers/PositionController");
const { BuyOrder, SellOrder, AllOrder } = require("./Controllers/OrderController");
const AllRouter=require("./Routes/AllRoutes");

const PORT = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5174",
      "https://zerodhaclone122.netlify.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
  });
  return res.json({ message: "Logged out successfully" });
});


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

app.use("/",AllRouter)


app.listen(PORT, () => {
  console.log("app is listening on port 3000");
});
