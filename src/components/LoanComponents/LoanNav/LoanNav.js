import React from 'react';
import { Link } from 'react-router-dom';
import './LoanNav.css';

const LoanNav = (props) => {
    const {name} = props;
    console.log("jkjl", name);
    
    
    return (
        <div>
            <div className='loan-nav-group'>
                <Link className='loan-nav' to="/loans/listing">LISTINGS</Link>
                <Link className='loan-nav' to="/loans/history">HISTORY</Link>
                <Link className='loan-nav' to="/loans/my-listing">MY LISTINGS</Link>
                <Link className='loan-nav' to="/loans/funded-loan">MY FUNDED LOANS</Link>
                <Link className='loan-nav' to="/loans/help-faq">HELP/FAQ</Link>
            </div>

            <div className= 'shared-hr' id={name}>

            </div>
        </div>
    );
};

export default LoanNav;