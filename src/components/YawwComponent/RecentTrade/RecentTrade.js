import React from 'react';
import RecentTradeList from '../RecentTradeList/RecentTradeList';
import './RecentTrade.css';

const RecentTrade = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between mx-3 mx-md-0'>
                <h4 className='recent-trade'>Recent Trade Listings</h4>
                <p className='text-explore'>EXPLORE MORE</p>
            </div>
            
            <RecentTradeList></RecentTradeList>
        </div>
    );
};

export default RecentTrade;