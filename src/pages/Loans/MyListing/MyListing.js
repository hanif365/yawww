import React from 'react';
import LoanNav from '../../../components/LoanComponents/LoanNav/LoanNav';
import LoanTopContent from '../../../components/LoanComponents/LoanTopContent/LoanTopContent';
import MyListingCollection from '../../../components/LoanComponents/MyListingCollection/MyListingCollection';
import Navbar from '../../../components/Shared/Navbar/Navbar';
import './MyListing.css';

const MyListing = () => {
    return (
        <div>
            <Navbar></Navbar>
            <LoanTopContent></LoanTopContent>
            <LoanNav name="my-listing"></LoanNav>
            <MyListingCollection></MyListingCollection>
        </div>
    );
};

export default MyListing;