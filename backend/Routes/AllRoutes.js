const express=require("express");
const  router=express.Router();
const authMiddleware = require("../Middlewares/AuthMiddleware");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");
const { GetHoldings, UpdateHoldings } = require("../Controllers/HoldingController");
const { GetPositions } = require("../Controllers/PositionController");
const { BuyOrder, SellOrder, AllOrder } = require("../Controllers/OrderController");
const { Signup, Login } = require("../Controllers/AuthController");

router.get("/auth",authMiddleware, (req, res) => {
  res.json({ loggedIn: true, user: req.user.username });
});

router.get("/allHoldings",authMiddleware, GetHoldings);


router.get("/allPositions",GetPositions);

router.post("/updateHoldings",authMiddleware,UpdateHoldings );

router.post("/signup", Signup);
router.post("/login", Login);

router.post("/BuyOrder",authMiddleware,BuyOrder );

router.post("/SellOrder",authMiddleware,SellOrder );

router.get("/allOrders",authMiddleware, AllOrder);

module.exports=router;