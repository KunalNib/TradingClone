import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [Orders, setOrders] = useState([]);
  // useEffect(()=>{
  //   axios.get("http://localhost:3000/allOrders").then((res)=>{
  //     setOrders(res.data);
  //   })
  // })
  return (
    <div className="order-table p-5 pt-0">
      {(Orders.length==true)&& (
        <div className="mt-0">
          <table className="row ms-2">
            <tr className="row ms-1">
              <th className="col-3">Name</th>
              <th className="col-3">Quantity</th>
              <th className="col-3">Price</th>
              <th className="col-3 ">Mode</th>
            </tr>
            {Orders.map((order) => {
              return (
                <tr className="row ms-1">
                  <td className="col-3  ">{order.name}</td>
                  <td className="col-3 ">{order.qty}</td>
                  <td className="col-3 ">{order.price}</td>
                  <td
                    className={
                      order.mode == "BUY"
                        ? "text-success " + "col-3 fs-6"
                        : "text-danger " + "col-3 fs-6"
                    }
                  >
                    {order.mode}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
      <div className="no-orders">
        {!Orders.length && (
          <div>
            <p>You haven't placed any orders today</p>
            <Link to="/" className="btn ms-5">
              Get started
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
