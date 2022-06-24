import React from 'react';
import './StakeNav.css';
import { Link } from 'react-router-dom';

const StakeNav = (props) => {
    const { name } = props;
    return (
        <div className='stake-nav-container'>
            <div className='stake-nav-group'>
                <Link className='stake-nav' to="/stake/staking">Staking</Link>
                <Link className='stake-nav' to="/stake/liquidity">Provide Liquidity</Link>
                <Link className='stake-nav' to="/stake/farm">Farm</Link>
            </div>

            <div className='stake-shared-hr' id={name}>

            </div>
        </div>
    );
};

export default StakeNav;