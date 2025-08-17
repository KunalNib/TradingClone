import React,{useState} from "react";
import { watchlist } from "../data/data";
import {Tooltip,Grow} from '@mui/material';
import WatchListItem from "./WatchListItem";
import { DoughnutChart } from "./DoughnutChart";

const labels=watchlist.map((stock)=>(stock.name));
const data={
  labels,
  datasets:[
    {
      label: 'stock',
      data: watchlist.map((stock)=>(stock.price)),
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(111, 159, 64, 0.8)',
        'rgba(100, 110, 64, 0.8)',
        'rgba(55, 149, 64, 0.8)',
        'rgba(255, 80, 155, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(111, 159, 64, 1)',
        'rgba(100, 110, 64, 1)',
        'rgba(55, 149, 64, 1)',
        'rgba(255,80, 155, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const WatchList = () => {
  return (
    <div className="col-12 col-md-4 ">
      <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        
      </div>
      <span className="counts"> {watchlist.length} / 50</span>
        <ul className="list">
        {watchlist.map((stock,index)=>{
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnutChart data={data}/>
    </div>
    </div>

  );
};

export default WatchList;

