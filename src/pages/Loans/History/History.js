import React from 'react';
import HistoryCollection from '../../../components/LoanComponents/HistoryCollection/HistoryCollection';
import LoanNav from '../../../components/LoanComponents/LoanNav/LoanNav';
import LoanTopContent from '../../../components/LoanComponents/LoanTopContent/LoanTopContent';
import Navbar from '../../../components/Shared/Navbar/Navbar';
import './History.css';

const History = () => {
    return (
        <div>
            <Navbar></Navbar>
            <LoanTopContent></LoanTopContent>
            <LoanNav name="history"></LoanNav>
            <HistoryCollection></HistoryCollection>
        </div>
    );
};

export default History;