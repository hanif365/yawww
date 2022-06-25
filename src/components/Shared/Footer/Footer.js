import React from 'react';
import './Footer.css';
import discordLogo from '../../../Assets/Images/discord-logo.png';
import twitterLogo from '../../../Assets/Images/twitter-logo.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='container'>
                <div className="row text-center">
                    <div className="col-md-4">
                        <h3>YAWWW</h3>
                        <h6 className='py-3'>#1 Tranding & <br />
                            Collateralization Platform for <br />
                            Solana NFTs</h6>

                        <div className='social-icon-group'>
                            <img src={discordLogo} alt="" className='me-2' />
                            <img src={twitterLogo} alt="" />
                        </div>

                    </div>
                    <div className="col-md-4 pt-4">
                        <h4>My Account</h4>
                        <a href="#">Open Trades</a> <br />
                        <a href="#">Trade Listings</a> <br />
                        <a href="#">Loan Listings</a>
                    </div>
                    <div className="col-md-4 pt-4">
                        <h4>Resources</h4>
                        <a href="#">Help & Support</a> <br />
                        <a href="#">Contact Us</a> <br />
                        <a href="#">Our Blog</a> <br />
                        <a href="#">Community</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;