import React from 'react';
import './FarmCollection.css';
import ethereumLogo from '../../../Assets/Images/ethereum-logo.png';
import fantomLogo from '../../../Assets/Images/fantom-logo.png';
import avalancheLogo from '../../../Assets/Images/avalanche-logo.png';
import binanceLogo from '../../../Assets/Images/binance-logo.png';

const FarmCollection = () => {
    return (
        <div className='FarmCollection-container container'>
            <h5 className='farm-title'>Farm</h5>
            <div className='choose-chain'>
                <h5>Choose Chain</h5>
                <div className='all-chain-div'>
                    <div className='ethereum-div'>
                        <p><img src={ethereumLogo} className="ethereumLogo" alt="" /> Ethereum</p>
                    </div>
                    <div className='binance-div'>
                        <p><img src={binanceLogo} alt="" className='binanceLogo' /> Binance</p>
                    </div>
                    <div className='fantom-div'>
                        <p><img src={fantomLogo} className="fantomLogo" alt="" /> Fantom</p>
                    </div>
                    <div className='avalanche-div'>
                        <p><img src={avalancheLogo} alt="" className='avalancheLogo' /> Avalanche</p>
                    </div>
                </div>



            </div>
            <div className='farm-hr'>

            </div>

            <div className='farming-opportunities'>
                <h5 className='farm-title'>Farming Opportunities</h5>
                <li class="nav-item dropdown farm-dropdown-btn">
                    <a class="nav-link nav-link-farm dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Farm
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>

            </div>

            <div className='farm-hr'>

            </div>

            <div className='farming-opportunities'>
                <h5 className='farm-title'>Deposit Tokens</h5>
                <li class="nav-item dropdown farm-dropdown-btn">
                    <a class="nav-link nav-link-farm dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={ethereumLogo} className="ethereumLogo" alt="" /> Select Token
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>

            </div>

            <div className='approve-btn-div'>
                <button className='approve-btn'>Approve</button>
            </div>


        </div>
    );
};

export default FarmCollection;