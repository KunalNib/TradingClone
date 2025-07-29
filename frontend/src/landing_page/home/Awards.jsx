import React from "react";

function Awards() {
  return (
    <div className="container-lg mt-5 mb-5  ">
      <div className="row ms-2">
        <div className="col-lg-5  col-xl-6 my-auto ">
          <img src="/media/largestBroker.svg" className="col-12 p-xl-5" style={{width:"90%"}}></img>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-lg-6 col-xl-6  my-auto mt-5">
          <div className="col-12">
            <h3 className="mb-2">Largest Stock Broker in India</h3>
            <p className="mb-5">
              2+ million Zerodha Clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>
            <div className="row mb-5 fs-6">
              <div className="col-6 ">
                <ul>
                  <li>
                    <p>Futures and Options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul >
                  <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Govt. Securities</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img src="/media/pressLogos.png" style={{ width: "90%" }} className="mt-3 mb-5 "></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
