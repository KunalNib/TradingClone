import React from "react";

function Pricing() {
  return (
    <div className="container-lg pb-5">
      <div className="row">
        <div className="col-12 col-md-5 m-3 mx-auto">
          <h3 >Unbeatable Pricing</h3>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div className="mt-5 fs-5">
              <a href="#" style={{ textDecoration: "none" }}>
                See pricing <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
        </div>
        <div className="col-12 col-md-6 d-flex  mx-auto">
          <div className="col-3">
            <img src="/media/pricing0.svg"></img>
            <p>Free account opening</p>
            
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <img src="/media/pricing0.svg"></img>
            <p>Free equity delivery and direct mutual funds</p>
          </div>
          <div className="col-1"></div>
          <div className="col-3 ">
            <img src="/media/intradayTrades.svg"></img>
            <p className="col-5">Intraday annd F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
