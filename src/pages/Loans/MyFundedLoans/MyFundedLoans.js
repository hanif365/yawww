import React from 'react';
import LoanNav from '../../../components/LoanComponents/LoanNav/LoanNav';
import LoanTopContent from '../../../components/LoanComponents/LoanTopContent/LoanTopContent';
import MyFundedLoanCollection from '../../../components/LoanComponents/MyFundedLoanCollection/MyFundedLoanCollection';
import Navbar from '../../../components/Shared/Navbar/Navbar';
import './MyFundedLoans.css';

const MyFundedLoans = () => {
    return (
        <div>
            <Navbar></Navbar>
            <LoanTopContent></LoanTopContent>
            <LoanNav name="my-funded-loans"></LoanNav>
            <MyFundedLoanCollection></MyFundedLoanCollection>
        </div>
    );
};

export default MyFundedLoans;