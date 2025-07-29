import React,{useState} from "react";
import { watchlist } from "../data/data";
import {Tooltip,Grow} from '@mui/material';
import WatchListItem from "./WatchListItem";
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
    </div>
    </div>

  );
};

export default WatchList;

