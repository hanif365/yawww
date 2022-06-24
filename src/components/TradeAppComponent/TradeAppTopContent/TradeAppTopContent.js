import React from 'react';
import './TradeAppTopContent.css';
import loanOutIcon from '../../../Assets/Images/loan-out-icon.png';
import loanBook from '../../../Assets/Images/loan-book.png';

const TradeAppTopContent = () => {
    return (
        <div className='container TradeAppTopContent-container'>
            <div className="row">
                <h4>P2P NFT Trading App</h4>
                <p>The safest place on Solana to trade verified NFTs</p>
            </div>

            <div>
                <ol class="steps">
                    <li class="step is-active" data-step="1">
                        Counterparty
                    </li>
                    <li class="step" data-step="2">
                        Their Offer
                    </li>
                    <li class="step" data-step="3">
                        Your Offer
                    </li>
                    <li class="step" data-step="4">
                        Confirmation
                    </li>
                </ol>
            </div>

            <div className='trade-app-hr'>

            </div>
        </div>
    );
};

export default TradeAppTopContent;