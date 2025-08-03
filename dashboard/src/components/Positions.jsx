
import React,{useState,useEffect} from "react";
import axios from "axios";

  

const Positions = () => {
  const [allPositions,setallPositions]=useState([]);
  useEffect(()=>{
   axios.get("http://localhost:3000/allPositions").then((res)=>{
    setallPositions(res.data);
    })
  },[]);
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          </thead>
          <tbody>
            {allPositions.map((position, index) => {
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
