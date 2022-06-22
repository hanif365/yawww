import React from 'react';
import './TradeTopContent.css';
import loanOutIcon from '../../../Assets/Images/loan-out-icon.png';
import loanBook from '../../../Assets/Images/loan-book.png';

const TradeTopContent = () => {
    return (
        <div className='container TradeTopContent-container'>
            <div className="row">
                <h4>P2P NFT Trading</h4>
                <p>List NFTs to receive offers on the P2P NFT Trading Marketplace. Listed NFTs will remain in your wallet. <br /> Interested parties can contact you via  <span className='text-highlight'>Yawww Discord <img className='loanOutIcon' src={loanOutIcon} alt="" /></span> <br /></p>

                <div className='d-flex justify-content-center py-3'>
                    <button className='btn btn-loan'><img className='loanBook-img' src={loanBook} alt="" /> Create a Loan Listings</button>
                </div>
            </div>

        </div>
    );
};

export default TradeTopContent;