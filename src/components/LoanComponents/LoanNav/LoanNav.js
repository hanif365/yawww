import React from 'react';
import { Link } from 'react-router-dom';
import './LoanNav.css';

const LoanNav = () => {
    return (
        <div>
            <div className='loan-nav-group'>
                <Link className='loan-nav' to="/listing">LISTINGS</Link>
                <Link className='loan-nav' to="/history">HISTORY</Link>
                <Link className='loan-nav' to="/my-listing">MY LISTINGS</Link>
                <Link className='loan-nav' to="/funded-loan">MY FUNDED LOANS</Link>
                <Link className='loan-nav' to="/help-faq">HELP/FAQ</Link>
            </div>

            <div className='shared-hr'>

            </div>
        </div>
    );
};

export default LoanNav;