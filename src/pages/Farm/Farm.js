import React from 'react';
import FarmCollection from '../../components/FarmComponent/FarmCollection/FarmCollection';
import Navbar from '../../components/Shared/Navbar/Navbar';
import StakeNav from '../../components/StakeComponent/StakeNav/StakeNav';
import StakeTopContent from '../../components/StakeComponent/StakeTopContent/StakeTopContent';
import './Farm.css';

const Farm = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StakeTopContent></StakeTopContent>
            <StakeNav name="Farm"></StakeNav>
            <FarmCollection></FarmCollection>
        </div>
    );
};

export default Farm;