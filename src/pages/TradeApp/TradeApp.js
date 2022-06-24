import React from 'react';
import Navbar from '../../components/Shared/Navbar/Navbar';
import TradeAppCollection from '../../components/TradeAppComponent/TradeAppCollection/TradeAppCollection';
import TradeAppTopContent from '../../components/TradeAppComponent/TradeAppTopContent/TradeAppTopContent';
import TradeTopContent from '../../components/TradeComponents/TradeTopContent/TradeTopContent';
import './TradeApp.css';

const TradeApp = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TradeAppTopContent></TradeAppTopContent>
            <TradeAppCollection></TradeAppCollection>
        </div>
    );
};

export default TradeApp;