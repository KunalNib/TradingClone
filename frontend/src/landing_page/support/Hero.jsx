import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className="container-lg">
        <div className=" p-5 ps-0" id="supportWrapper">
          <h4 className="fs-5">Support Portal</h4>
          <a href="" className="me-5 " style={{fontSize:"1.1rem"}}>Track Tickets</a>
        </div>
        <div className="row ">
            <div className="col-12 col-md-6 mb-5">
                <h3 className="fs-4 mb-4">Search for an answer or browse help topics to create a ticket</h3>
                <input className="d-block col-sm-8 col-md-11 col-lg-9 mb-4 p-3 rounded border" placeholder="Eg:how do i activate F&O,why is my order getting rejected.."></input>
                <a href="">Track accout opening</a> &nbsp;
                <a href="">Track segment activation</a> &nbsp;
                <a href="">Intraday</a> &nbsp;
                <a href="">margins</a> &nbsp;
                <a href="">Kite user manual</a>
            </div>
            <div className="col-1"></div>
            <div className="col-12 col-md-5 mb-5">
                <h4 className="fs-4">Featured</h4>
                <a href="" className="d-block mb-2 m"> 1. Current Takeovers and Delisting - January 2024</a>
                <a href="" className="d-block ">2. Latest Intraday Leverages-MIS & CO</a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
