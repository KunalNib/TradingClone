import React from "react";

function Universe() {
  return (
    <div className="container-lg mt-5">
      <h4 className="">&nbsp;</h4>
      <h4 className="text-muted text-center mb-5 fs-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="" className="extlink">
          Zerodha.tech
        </a>
        blog.
      </h4>
      <h4 className="text-muted text-center">The Zerodha Universe</h4>
      <p className="text-center text-muted mb-5" style={{ fontSize: "1.1rem" }}>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <h4 className="">&nbsp;</h4>
      <div className="row text-center text-muted">
        <div className="col-12 col-md-4 mt-5 mt-md-0 text-center text-muted " style={{fontSize:"0.7rem"}}>
          <img src="media/zerodhaFundhouse.png" style={{ width: "70%" }}></img>
          <p className="mt-2">
            Our asset management venture <br></br>that is creating simple and transparent
            index<br></br> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-12 col-md-4 mt-5 mt-md-2 text-muted" style={{fontSize:"0.7rem"}}>
          <img src="media/sensibullLogo.svg" style={{ width: "70%" }}></img>
          <p className="mt-3">
            Options trading platform that lets you<br></br> create strategies, analyze
            positions, and examine <br></br>data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-12 col-md-4 mt-5 mt-md-0 text-muted" style={{fontSize:"0.7rem"}}>
          <img src="media/tijori.svg" style={{ width: "65%" }}></img>
          <p className="">
            Investment research platform<br></br> that offers detailed insights on stocks,<br></br>sectors,supply chains,and more
          </p>
        </div>
      </div>
      <h4 className="">&nbsp;</h4>
      <div className="row text-center mt-5 mt-md-0 text-muted">
        <div className="col-12 col-md-4  " style={{fontSize:"0.7rem"}}>
          <img src="media/streakLogo.png" style={{ width: "70%" }}></img>
          <p className="mt-2">
            Systematic trading platform <br></br>that allows you to create and backtest
            index<br></br> strategies without c
          </p>
        </div>
        <div className="col-12 col-md-4 mt-5 mt-md-0 text-muted" style={{fontSize:"0.7rem"}}>
          <img src="media/smallcaseLogo.png" style={{ width: "70%" }}></img>
          <p className="mt-3">
            Thematic investing platform <br></br> that helps you invest in diversifies<br></br> baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-12 col-md-4 mt-5 mt-md-0 text-muted " style={{fontSize:"0.7rem"}}>
          <img src="media/dittoLogo.png" style={{ width: "65%" }}></img>
          <p className="mt-2">
            Personalized advice on life health insurance.<br></br>and health insurance.No spam<br></br>and no mis-selling
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
