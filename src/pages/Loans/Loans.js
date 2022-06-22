import React from 'react';
import ListingCollection from '../../components/LoanComponents/ListingCollection/ListingCollection';
import LoanNav from '../../components/LoanComponents/LoanNav/LoanNav';
import LoanTopContent from '../../components/LoanComponents/LoanTopContent/LoanTopContent';
import Navbar from '../../components/Shared/Navbar/Navbar';
import './Loans.css';

const Loans = () => {
    return (
        <div>
            <Navbar></Navbar>
            <LoanTopContent></LoanTopContent>
            <LoanNav name="listings"></LoanNav>
            <ListingCollection></ListingCollection>
        </div>
    );
};

export default Loans;