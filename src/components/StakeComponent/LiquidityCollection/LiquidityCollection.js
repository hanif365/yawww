import React from 'react';
import './LiquidityCollection.css';
import messageBox from '../../../Assets/Images/message-box.png';
import { useState } from 'react';
import ethereumLogo from '../../../Assets/Images/ethereum-logo.png';

const LiquidityCollection = () => {
    const [positionBoxOpen, setPositionBoxOpen] = useState(true);

    const handlePositionBoxOpen = () => {
        setPositionBoxOpen(false);
    }

    return (
        <div className='LiquidityCollection-container container'>
            <h4>Pools Overview</h4>

            {positionBoxOpen ? <div>
                <div className='new-position-btn'>
                    <button onClick={() => handlePositionBoxOpen()} className='new-position-btn-inner'>+ New Position</button>
                </div>

                <div className='position-box'>
                    <img src={messageBox} alt="" />
                    <p>Your active V3 liquidity positions will appear here.</p>
                </div>
            </div> :

                <div className='new-position-content'>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Choose Chain</h5>
                            <div className='d-flex justify-content-between'>
                                <li class="nav-item dropdown new-position-dropdown-btn col-md-6">
                                    <a class="nav-link nav-link-liquidity dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={ethereumLogo} className="ethereumLogo" alt="" /> Ethereum
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown new-position-dropdown-btn col-md-5">
                                    <a class="nav-link nav-link-liquidity dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={ethereumLogo} className="ethereumLogo" alt="" /> Ethereum
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </div>


                            <div className='free-tier-div'>
                                <div>
                                    <h5>Fee tier</h5>
                                    <p>The % you will earn in fees</p>
                                </div>
                                <h5 className='align-self-center'>Edit</h5>
                            </div>

                            <div className="deposit-amount">
                                <h5>Deposit Amounts</h5>
                                <div className='deposit-amount-content'>
                                    <h5 className='align-self-center'>0.0</h5>
                                    <div>
                                        <h5><img src={ethereumLogo} className="ethereumLogo" alt="" /> ETH</h5>
                                        <p>Balance: 0</p>
                                    </div>
                                </div>
                            </div>
                            <div className="deposit-amount my-3">
                                {/* <h5>Deposit Amounts</h5> */}
                                <div className='deposit-amount-content'>
                                    <h5 className='align-self-center'>0.0</h5>
                                    <div>
                                        <h5><img src={ethereumLogo} className="ethereumLogo" alt="" /> ETH</h5>
                                        <p>Balance: 0</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <h5 className='text-center'>Set Price Range</h5>
                            <div className='message-box'>
                                <img src={messageBox} alt="" />
                                <p>Your active V3 liquidity positions will appear here.</p>
                            </div>

                            <div className='price-div-outer'>
                                <div className='price-div col-md-5 me-5'>
                                    <p className='align-self-center minus-icon'>-</p>
                                    <div className='price-inner'>
                                        <p>Min Price</p>
                                        <h5>0.0</h5>
                                        <p>Per ETH</p>
                                    </div>
                                    <p className='align-self-center plus-icon'>+</p>

                                </div>
                                <div className='price-div col-md-5'>
                                    <p className='align-self-center minus-icon'>-</p>
                                    <div className='price-inner'>
                                        <p>Min Price</p>
                                        <h5>0.0</h5>
                                        <p>Per ETH</p>
                                    </div>
                                    <p className='align-self-center plus-icon'>+</p>

                                </div>
                            </div>

                            <div className='full-range'>
                                <p>Full Rage</p>
                            </div>

                            <div>
                                <button className='btn btn-invalid'>Invalid Pair</button>
                            </div>


                        </div>
                    </div>

                </div>

            }
        </div>
    );
};

export default LiquidityCollection;