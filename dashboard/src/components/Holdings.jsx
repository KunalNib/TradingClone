import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalChart } from "./VerticalChart";

const Holdings = () => {
  const [allHoldings, setallHoldings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/allHoldings",{ withCredentials: true }).then((res) => {
      setallHoldings(res.data);
    });
  }, []);

  const labels=allHoldings.map((arr)=>(arr.name));
 const data = {
  labels,
  datasets: [
    {
      label: 'Stock Price',
      data: allHoldings.map((holding) =>holding.price ),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((holding, index) => {
            const curVal = holding.price * holding.qty;
            const isProfit = curVal - holding.avg * holding.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = holding.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{holding.name}</td>
                <td>{holding.qty}</td>
                <td>{holding.avg.toFixed(2)}</td>
                <td>{holding.price.toFixed(2)}</td>
                <td>{curVal.toFixed(2)}</td>
                <td className={profClass}>
                  {(curVal - holding.avg * holding.qty).toFixed(2)}
                </td>
                <td className={profClass}>{holding.net}</td>
                <td className={dayClass}>{holding.day}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalChart data={data}/>
    </>
  );
};

export default Holdings;
