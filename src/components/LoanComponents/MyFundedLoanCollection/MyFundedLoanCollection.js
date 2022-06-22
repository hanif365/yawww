import React from 'react';
import './MyFundedLoanCollection.css';

const MyFundedLoanCollection = () => {
    return (
        <div className='container MyFundedLoadCollection-container'>
            <h4 className='pb-3'>Loans funded</h4>
            <p>Please connect your wallet to view your loans</p>
            <button className='btn btn-wallet'>Select Wallet</button>
        </div>
    );
};

export default MyFundedLoanCollection;