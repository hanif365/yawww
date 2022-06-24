import React from 'react';
import { Link } from 'react-router-dom';
import './TradeNav.css';

const TradeNav = (props) => {
    const { name } = props;
    
    return (
        <div className='trade-nav-container'>
            <div className='trades-nav-group'>
                <Link className='trades-nav' to="/trades/listing">LISTINGS</Link>
                <Link className='trades-nav' to="/trades/history">HISTORY</Link>
                <Link className='trades-nav' to="/trades/my-listing">MY LISTINGS</Link>
                <Link className='trades-nav' to="/trades/funded-loan">MY FUNDED LOANS</Link>
                <Link className='trades-nav' to="/trades/help-faq">HELP/FAQ</Link>
            </div>

            <div className='shared-hr' id={name}>

            </div>
        </div>
    );
};

export default TradeNav;