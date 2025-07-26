import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Leftimage from "./LeftImage";
import Rightimage from "./RightImage";
import Universe from "./Universe";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <Leftimage
        image={"./media/kite.png"}
        blockHead={"Kite"}
        productDescription={`Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.`}
        firstLink={{ link: "", val: "try demo" }}
        SecondLink={{ link: "", val: "Learn more" }}
        borTop={true}
      />
      <Rightimage
        image={"./media/console.png"}
        blockHead={"Console"}
        productDescription={`The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.`}
        firstLink={{ link: "", val: "Learn more" }}
      />
      <Leftimage
        image={"./media/coin.png"}
        blockHead={"Coin"}
        productDescription={`Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices`}
        firstLink={{ link: "hello", val: "Coin" }}
      />
      <Rightimage
        image={"./media/kiteconnect.png"}
        blockHead={"Kite Connect API"}
        productDescription={`Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.`}
        firstLink={{ link: "", val: "Kite Connect" }}
      />
      <Leftimage
        image={"./media/varsity.png"}
        blockHead={"Varsity mobile"}
        productDescription={`An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
`}
      />
      <Universe />
    </>
  );
}

export default ProductPage;
