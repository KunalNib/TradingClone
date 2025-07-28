import React from "react";

function RaiseTicket() {
  return (
    <div className="container-lg">
      <h3 className="mt-5">To create a ticket, select a relevent topic</h3>
      <div className="row mt-5" style={{fontSize:"1.1rem"}}>
        <div className="col-12 col-md-4 mt-4">
          <h5 className="mb-4">
            <i class="fa-solid fa-circle-plus"></i> Account Opening
          </h5>
          <div className="extlink">
            <p>Online Account Opening</p>
            <p>Offline Account Opening</p>
            <p>Company,Partnership and HUF Account Opening</p>
            <p>NRI Account Opening</p>
            <p>Charges at Zerodha</p>
            <p>Zerodha IDFC FIRST Bank 3-in-1 Account</p>
            <p>Getting Started</p>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-4">
          <h5 className="mb-4 ">
            <i class="fa-solid fa-user"></i> Your Zerodha Account
          </h5>
          <div className="extlink">
            <p>Login Credentials</p>
            <p>Account Modification and Segment Addition</p>
            <p>DP ID and back details</p>
            <p>Your Profile</p>
            <p>Transfer and conversion of shares</p>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-4">
          <h5 className="mb-4">
            <i class="fa-solid fa-chart-column"></i> Your Zerodha Account
          </h5>
          <div className="extlink">
            <p>Margin/leverage,Product and Order types</p>
            <p>Kite Web and Mobile</p>
            <p>Trading FAQs</p>
            <p>Corporate Actions</p>
            <p>Sentinel</p>
            <p>Kite API</p>
            <p>Pi and other platforms</p>
            <p>Stockreports+</p>
            <p>GTT</p>
          </div>
        </div>
      </div>
      <div className="row" style={{fontSize:"1.1rem"}}>
        <div className="col-12 col-md-4 mt-4">
          <h5 className="mb-4">
            <i class="fa-solid fa-credit-card"></i> Funds{" "}
          </h5>
          <div className="extlink">
            <p>Adding Funds</p>
            <p>Fund Withdrawal</p>
            <p>eMandates</p>
            <p>Adding Bank Accounts</p>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-4">
          <h5 className="mb-4 ">
            <i class="fa-solid fa-circle-notch"></i> Console
          </h5>
          <div className="extlink">
            <p>Reports</p>
            <p>Ledgern</p>
            <p>Portfolio</p>
            <p>60 Day Challenge</p>
            <p>IPO</p>
            <p>Referral Program</p>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-4">
          <h5 className="mb-4">
            <i class="fa-regular fa-circle"></i> Coin
          </h5>
          <div className="extlink">
            <p>Understanding Mutual Fund</p>
            <p>About Coin</p>
            <p>Buying and Selling through Coin</p>
            <p>Starting an SIP</p>
            <p>Managing your Portfolio</p>
            <p>Coin App</p>
            <p>Moving to Coin</p>
            <p>Government Securities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaiseTicket;
