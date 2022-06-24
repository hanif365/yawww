import React from 'react';
import Navbar from '../../components/Shared/Navbar/Navbar';
import StakeNav from '../../components/StakeComponent/StakeNav/StakeNav';
import StakeTopContent from '../../components/StakeComponent/StakeTopContent/StakeTopContent';
import StakingCollection from '../../components/StakeComponent/StakingCollection/StakingCollection';
import './Stake.css';

const Stake = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StakeTopContent></StakeTopContent>
            <StakeNav name="Staking"></StakeNav>
            <StakingCollection></StakingCollection>
        </div>
    );
};

export default Stake;