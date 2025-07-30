import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {positions.map((position, index) => {
            const curVal = position.price * position.qty;
            const isProfit = curVal - position.avg * position.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = position.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{position.product}</td>
                <td>{position.name}</td>
                <td>{position.qty}</td>
                <td>{position.avg.toFixed(2)}</td>
                <td>{position.price}</td>
                <td className={profClass}>{(curVal-position.avg*position.qty).toFixed(2)}</td>
                <td className={dayClass}>{position.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
