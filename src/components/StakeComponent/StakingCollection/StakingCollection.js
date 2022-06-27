import React from 'react';
import './StakingCollection.css';
import ethereumLogo from '../../../Assets/Images/ethereum-logo.png';
import doubleArrow from '../../../Assets/Images/double-arrow.png';

const StakingCollection = () => {
    return (
        <div className='StakingCollection-container container'>
            <h4 className='text-staking-header'>$YAW Staking</h4>
            <div className='yaw-staking'>
                <div className='yaw-staking-text'>
                    <p>Est. $YAW Staking APR</p>
                    <h4>14.07%</h4>
                </div>
                <div className='yaw-staking-text'>
                    <p>Total $YAW Staked</p>
                    <h4>17,467,527</h4>
                </div>
                <div className='yaw-staking-text'>
                    <p>$YAW In Circulation</p>
                    <h4>33,384,311</h4>
                </div>
            </div>

            <div className="select-chain pt-5">
                <h5>Choose Chain</h5>
                <li class="nav-item dropdown staking-dropdown-btn">
                    <a class="nav-link nav-link-staking dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={ethereumLogo} className="ethereumLogo" alt="" /> Ethereum
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>

            </div>

            <div className="balance pt-4">
                <div className="row balance-inner">
                    <div className="col-md-5">
                        <div className='balance-text'>
                            <h5>Stake</h5>
                            <p>Balance 847,45</p>
                        </div>
                        <input className='form-control form-control-lg input-balance' type="text" />
                    </div>

                    <div className="col-md-2 double-arrow">
                        <img src={doubleArrow} alt="" />
                    </div>

                    <div className="col-md-5 pt-2 pt-md-0">
                        <div className='balance-text'>
                            <h5>Receive</h5>
                            <p>.</p>
                        </div>
                        <input className='form-control form-control-lg input-balance' type="text" />
                    </div>
                </div>
                <div className='stake-btn'>
                    <button className='stake-btn-inner'>Stake</button>
                </div>
            </div>

        </div>
    );
};

export default StakingCollection;