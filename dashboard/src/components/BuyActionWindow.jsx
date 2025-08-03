import React, { useContext, useState } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("http://localhost:3000/BuyOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
    axios.post("http://localhost:3000/updateHoldings",{
      name:uid,
      qty:stockQuantity,
      price:stockPrice
    })
    console.log("requestSent");
    location.reload();
    closeBuyWindow();
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Buy Stock for {uid}
            </h5>
          </div>
          <div className="modal-body row mt-0">
            <label></label>
            <div className="col-6">
              <label className="fs-4 text-muted"> &nbsp; Qty.</label>
              <input
                type="number"
                className="form-control col-6 "
                placeholder="quantity"
                value={stockQuantity}
                min="0"
                onChange={(event) => {
                  setStockQuantity(event.target.value);
                }}
              ></input>
            </div>
            <div className="col-6">
              <label
                className="fs-4 text-muted"
              >
                Price
              </label>
              <input
                type="number"
                className="form-control col-6"
                placeholder="price"
                min="0"
                value={stockPrice}
                onChange={(event) => {
                  setStockPrice(event.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary rounded"
              onClick={() => {
                closeBuyWindow();
              }}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary rounded"
              onClick={handleBuyClick}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
