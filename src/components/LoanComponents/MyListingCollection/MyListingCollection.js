import React from 'react';
import './MyListingCollection.css';

const MyListingCollection = () => {
    return (
        <div className='container MyListingCollection-container pt-5 pt-md-0'>
            <h4 className='pb-3'>My Listed Loans</h4>
            <p>Please connect your wallet to view your loans</p>
            <button className='btn btn-wallet'>Select Wallet</button>
        </div>
    );
};

export default MyListingCollection;