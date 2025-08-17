import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import{ GeneralContextProvider } from "./GeneralContext";

const Dashboard = ({username}) => {
  return (
    <div className="dashboard-container mt-1">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
        <div className="col-12 col-md-7">
        <div className="content  mt-lg-0  ms-5">
          <Routes>
            <Route exact path="/" element={<Summary username={username}/>} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
