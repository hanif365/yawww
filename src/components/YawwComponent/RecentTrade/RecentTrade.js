import React from 'react';
import RecentTradeList from '../RecentTradeList/RecentTradeList';
import './RecentTrade.css';

const RecentTrade = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <h4>Recent Trade Listings</h4>
                <p className='text-explore'>EXPLORE MORE</p>
            </div>
            
            <RecentTradeList></RecentTradeList>
        </div>
    );
};

export default RecentTrade;