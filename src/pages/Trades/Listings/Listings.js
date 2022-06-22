import React from 'react';
import Navbar from '../../../components/Shared/Navbar/Navbar';
import TradeListingCollection from '../../../components/TradeComponents/TradeListingCollection/TradeListingCollection';
import TradeNav from '../../../components/TradeComponents/TradeNav/TradeNav';
import TradeTopContent from '../../../components/TradeComponents/TradeTopContent/TradeTopContent';
import './Listings.css';

const Listings = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TradeTopContent></TradeTopContent>
            <TradeNav name="listings"></TradeNav>
            <TradeListingCollection></TradeListingCollection>
        </div>
    );
};

export default Listings;