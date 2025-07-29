import React from "react";

function Team() {
  return (
    <div className="container-lg">
      <h3 className="text-center mb-5">People</h3>
      <div className="row" style={{fontSize:"1.2rem"}}>
        <div className="col-12 col-md-5 p-5 p-md-0 pd-xl-5">
          <img
            src="/media/nithinKamath.jpg"
            className="rounded-circle col-12 ms-5 mt-md-5 mt-xl-0"
            style={{width:"75%"}}
          ></img>
          <div className="col-12">
            <h4 className="text-muted text-center me-xl-5 mt-2"> Nithin Kamath</h4>
            <p className="text-muted text-center me-xl-5">Founder,CEO</p>
          </div>
        </div>
        <div className="col-12 col-md-7 ms-xl-5 col-xl-5 ms-sm-2 ms-md-0  text-muted mt-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p>
            Connect on <a href="" className="extlink">Homepage</a> / <a href="" className="extlink">TradingQnA</a> / <a href="" className="extlink">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
