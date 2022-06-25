import React from 'react';
import './Header.css';
import headerImg from '../../../Assets/Images/header_img.png';
import tradeLogo from '../../../Assets/Images/trade_logo.png';
import stakeLogo from '../../../Assets/Images/stake_logo.png';
import lendLogo from '../../../Assets/Images/lend_logo.png';
import handLogo from '../../../Assets/Images/hand-logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className=' header_container'>
            <div className="">
                <div className="col">
                    <h1>Collateralize & Trade</h1>
                    <h1 className='header_text_highlight'>Solana NFTs</h1>
                    <img src={headerImg} alt="" className='headerImg pt-5 pb-3' />
                    <h5>The safest place on solana to collaterize & trade your NFTs</h5>
                    <div>
                        <button className='btn btn_trade me-md-5'><img src={handLogo} alt="" className='' /> Trade Listings</button>
                        <button className='btn btn_loan'>% Loan Listings</button>
                    </div>
                    {/* <FontAwesomeIcon icon={faCoffee} /> */}

                    <div className='trade-logo-section justify-content-center py-md-5 mt-5'>
                        <div>
                            <img src={tradeLogo} alt="" className='group_img' />
                            <h4>Trade</h4>
                            <p>Automated NFT Escrow and Trade listings</p>
                        </div>
                        <div className='mx-5'>
                            <img src={lendLogo} alt="" className='group_img' />
                            <h4>Lend</h4>
                            <p>Collateralize NFTs on your own terms</p>
                        </div>
                        <div>
                            <img src={stakeLogo} alt="" className='group_img' />
                            <h4>Stake</h4>
                            <p>Stake Yawww NFTs & $YAW</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;