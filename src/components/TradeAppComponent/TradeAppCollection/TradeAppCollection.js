import React from 'react';
import './TradeAppCollection.css';
import t6 from '../../../Assets/Images/t6.png';
import solanaImg from '../../../Assets/Images/solana_logo.png';

import rightArrow from '../../../Assets/Images/right-arrow.png';
import leftArrow from '../../../Assets/Images/left-arrow.png';
import graph from '../../../Assets/Images/graph.png';
import settingImg from '../../../Assets/Images/trade-app-setting.png';
import minimizeImg from '../../../Assets/Images/trade-app-minimize.png';
import lowerArrow from '../../../Assets/Images/lower-arrow.png';

const TradeAppCollection = () => {
    return (
        <div className='TradeAppCollection-container container'>
            <div className="row">
                <div className="col-md-7 trade-app-left-div">
                    <h4 className='text-top'>NFT TRADING</h4>
                    <div className='trade-app-left-upper-part'>
                        <div className='trade-app-leftArrow'>
                            <img src={leftArrow} alt="" />
                        </div>

                        <div class="card" className='TradeAppCollection_card'>
                            <img src={t6} class="card-img-top p-2" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title card-main-title">Trippin’ Ape Tribe #3803</h6>
                                <h6 class="card-sub-title">Trippin Ape Tribe</h6>
                                <div className='hr'>

                                </div>

                                <h6 class="card-lower-title">LOOKING FOR</h6>

                                <div className='d-flex '>
                                    <img src={solanaImg} alt="" className='solana-img' />
                                    <h6 className='solana-price'>31.99</h6>
                                </div>

                                <div className='btn-group-trade-app-list'>
                                    <a href="#" class="btn btn-trade-app-list">Famous Fox Federation</a>
                                    <a href="#" class="btn btn-trade-app-list">OG Atadians</a>
                                </div>

                            </div>
                        </div>

                        <div className='trade-app-rightArrow'>
                            <img src={rightArrow} alt="" />
                        </div>
                    </div>

                    {/* lower part */}
                    <div className='trade-app-lower-part'>
                        <div className='lower-content'>
                            <p>Creator</p>
                            <p><span className='trade-app-highlight'>Anmkr</span> 0xB219b...</p>
                        </div>
                        <div className='lower-content'>
                            <p>Owener</p>
                            <p><span className='trade-app-highlight'>Asker</span> 0xF319b...</p>
                        </div>
                        <div className='lower-content'>
                            <p>Market Valuation</p>
                            <p className='graph-text'>+54,4 <img className='graph-img' src={graph} alt="" /></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 trade-app-right-div">
                    <h4 className='text-top'>TRANSFER <img src={settingImg} className="settingImg" alt="" /> <img src={minimizeImg} className="minimizeImg" alt="" /></h4>

                    <div className='transfer-hr'>

                    </div>

                    <div className='wallet-address-content'>
                        <p>My Wallet</p>
                        <p className='wallet-address'>0xB219b413f0214cCe9dC1BA36398EC60e95a10b9f</p>
                        <img className='lowerArrow' src={lowerArrow} alt="" />
                    </div>

                    <div className='new-wallet-address-content'>
                        <p>Wallet new owner</p>
                        <p className='new-wallet-address'>0xB219b413f0214cCe9dC1BA36398EC60e95a10b9f</p>
                    </div>

                    <div className='tolerance-content'>
                        <p>Slippage Tolerance</p>
                        <p>0.5%</p>
                    </div>

                    <div className='trade-transfer-btn'>
                        <button className='transfer-btn-inner'>Transfer</button>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default TradeAppCollection;