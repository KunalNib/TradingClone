import React from "react";

function Hero() {
  return (
    <div className="container-lg p-5 mt-5">
      <h2 className="text-center">Charges</h2>
      <p className="fs-4 text-muted text-center">
        List of all charges and taxes
      </p>
      <h4 className="mt-5">&nbsp;</h4>
      <div className="row mt-5 text-center">
        <div className="col-12 col-md-4">
          <img src="media/pricing0.svg"></img>
          <h2 className="">Free equity delivery</h2>
          <p className="text-center text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img src="media/intradayTrades.svg"></img>
          <h2>Intraday and F&O trades</h2>
          <p className="text-center text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img src="media/pricing0.svg"></img>
          <h2>Free direct MF</h2>
          <p className="text-muted text-center">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
