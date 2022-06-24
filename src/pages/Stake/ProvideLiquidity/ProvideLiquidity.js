import React from 'react';
import Navbar from '../../../components/Shared/Navbar/Navbar';
import LiquidityCollection from '../../../components/StakeComponent/LiquidityCollection/LiquidityCollection';
import StakeNav from '../../../components/StakeComponent/StakeNav/StakeNav';
import StakeTopContent from '../../../components/StakeComponent/StakeTopContent/StakeTopContent';
import './ProvideLiquidity.css';

const ProvideLiquidity = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StakeTopContent></StakeTopContent>
            <StakeNav name="Liquidity"></StakeNav>
            <LiquidityCollection></LiquidityCollection>
        </div>
    );
};

export default ProvideLiquidity;