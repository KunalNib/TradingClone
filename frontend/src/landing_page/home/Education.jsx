import React from "react";

function Education() {
  return (
    <div className="container-lg  mb-5 mt-5">
      <div className="row ms-2 ">
        <div className="col-12 col-md-5 p-xl-5 mb-5 m-auto">
          <img src="/media/homevarsity.svg" className="col-12"></img>
        </div>
        <div className="col-1"></div>
        <div className=" col-12 col-md-6 m-auto">
          <h3 className="text-muted mb-4">Free and open market education</h3>
          <p className="text-muted mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{textDecoration:"none"}} className="fs-5 ">Varsity <i className="fa-solid fa-arrow-right-long"></i></a>
          <p className="text-muted mt-4 mb-4">
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="#" style={{textDecoration:"none"}} className="fs-5 ">TradingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Education;
