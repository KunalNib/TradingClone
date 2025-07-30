import React, { useState } from 'react';
import WatchList from './WatchList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { Grow, Tooltip } from '@mui/material';
export default function WatchListItem({stock}){
    const [showListActions,setshowListActions]=useState(false);
    const handleMouseEnter=(e)=>{
        setshowListActions(true);
    }
    const handleMouseLeave=(e)=>{
        setshowListActions(false);
    }
    return(
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='item'>
                <p className={stock.isDown? "down":"up"}>
                    {stock.name}
                </p>
                <div className="item-info">
                    <span className='percent'>{stock.percent}</span>
                    {stock.isDown?(<KeyboardArrowDownIcon className="down" />):<KeyboardArrowUpIcon  className="up"/>}
                    <span className='price'>{stock.price}</span>
                </div>
            </div>
            {showListActions && <WatchListActions uid={stock.name}/>}
        </li>
    );
}

const WatchListActions=({uid})=>{
  return(
    <span className="actions ">
      <span className='bg-white'>
        <Tooltip
        title="Buy (B)"
        placement="top"
        arrow 
        slots={{transition:Grow}}
        >
            <button className='buy'>Buy</button>
        </Tooltip>
        <Tooltip
        title="Sell (S)"
        placement="top"
        arrow 
        slots={{transition:Grow}}
        >
            <button className='sell'>Sell</button>
        </Tooltip>
        <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow 
        slots={{transition:Grow}}
        >
            <button className='action'>
                <BarChartOutlinedIcon  className='icon'/>
            </button>
        </Tooltip>
        <Tooltip
        title="More (M)"
        placement="top"
        arrow 
        slots={{transition:Grow}}
        >
            <button className='action'>
                <MoreHorizIcon className='icon'/>
            </button>
        </Tooltip>
      </span>
    </span>
  );
}