import React from 'react';
import './LoanTopContent.css';
import loanOutIcon from '../../../Assets/Images/loan-out-icon.png';
import loanBook from '../../../Assets/Images/loan-book.png';

const LoanTopContent = () => {
    return (
        <div className='container LoanTopContent-container'>
            <div className="row">
                <h4>NFT Collateralized Loans</h4>
                <p>Define your terms and collateralize NFT at the P2P Loan Marketplace. Lender can fund loans with a single click! <br /> Wondering how to evaluate NFTs an loan terms? Join the discussion at <span className='text-highlight'>Yawww Discord <img className='loanOutIcon' src={loanOutIcon} alt="" /></span> <br />
                    Borrower guide: <span className='text-highlight'> Video <img className='loanOutIcon' src={loanOutIcon} alt="" /> Slides <img className='loanOutIcon' src={loanOutIcon} alt="" /> </span> Lender guide: <span className='text-highlight'> Video <img className='loanOutIcon' src={loanOutIcon} alt="" /> Slides <img className='loanOutIcon' src={loanOutIcon} alt="" /> </span> </p>

                <div className='d-flex justify-content-center py-3'>
                    <button className='btn btn-loan'><img className='loanBook-img' src={loanBook} alt="" /> Create a Loan Listings</button>
                </div>
            </div>

        </div>
    );
};

export default LoanTopContent;