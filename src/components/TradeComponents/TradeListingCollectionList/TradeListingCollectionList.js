import React from 'react';
import './TradeListingCollectionList.css';
import solanaImg from '../../../Assets/Images/solana_logo.png';
import tl1 from '../../../Assets/Images/tl1.png';
import tl2 from '../../../Assets/Images/tl2.png';
import tl3 from '../../../Assets/Images/tl3.png';
import tl4 from '../../../Assets/Images/tl4.png';
import tl5 from '../../../Assets/Images/tl5.png';
import tl6 from '../../../Assets/Images/tl6.png';
import tl7 from '../../../Assets/Images/tl7.png';
import tl8 from '../../../Assets/Images/tl8.png';

const TradeListingCollectionList = () => {
    return (
        <div className='TradeListing_container'>
            <div class="card" className='TradeListing_card'>
                <img src={tl1} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Nuked Ape #3169</h6>
                    <h6 class="card-sub-title">Nuked Ape</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="trade-card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>22.5</h6>
                    </div>

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">Trippin Ape Tribe</a>
                        {/* <a href="#" class="btn btn-trade-list">OG Atadians</a> */}
                    </div>
                </div>
            </div>

            {/* card 2 */}
            <div class="card" className='TradeListing_card'>
                <img src={tl2} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Okay Bulls #9781</h6>
                    <h6 class="card-sub-title">Okay Bulls</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="trade-card-lower-title">LOOKING FOR</h6>

                    {/* <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>22.5</h6>
                    </div> */}

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">Okay Bears</a>
                        <a href="#" class="btn btn-trade-list">Okay Bulls</a>
                        <a href="#" class="btn btn-trade-list">Degods</a>
                    </div>
                </div>
            </div>

            {/* card 3 */}
            <div class="card" className='TradeListing_card'>
                <img src={tl3} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Degen Ape #9592</h6>
                    <h6 class="card-sub-title">Degenerate Ape Academy</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="trade-card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>110</h6>
                    </div>

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">Cets On Check</a>
                        <a href="#" class="btn btn-trade-list">Degenerate Ape Academy</a>
                    </div>
                </div>
            </div>

            {/* card 4 */}
            <div class="card" className='TradeListing_card'>
                <img src={tl4} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Trippin’ Ape Tribe #5974</h6>
                    <h6 class="card-sub-title">Trippin Ape Tribe</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="trade-card-lower-title">LOOKING FOR</h6>

                    {/* <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>22.5</h6>
                    </div> */}

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">OG Atadians</a>
                        {/* <a href="#" class="btn btn-trade-list">OG Atadians</a> */}
                    </div>
                </div>
            </div>

            {/* card 5 */}
            <div class="card" className='TradeListing_card'>
                <img src={tl5} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Nuked Ape #2671</h6>
                    <h6 class="card-sub-title">Nuked Ape</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="trade-card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>22</h6>
                    </div>

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">Bot Head</a>
                        <a href="#" class="btn btn-trade-list">Bohemia</a>
                        <a href="#" class="btn btn-trade-list">Mycelium OG Pass</a>
                    </div>
                </div>
            </div>

            {/* card 6 */}
            <div class="card" className='TradeListing_card'>
                <img src={tl6} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Stoned Ape #2831</h6>
                    <h6 class="card-sub-title">Stoned Ape Crew</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="trade-card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>65</h6>
                    </div>

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">Cets On Creck</a>
                        {/* <a href="#" class="btn btn-trade-list">OG Atadians</a> */}
                    </div>
                </div>
            </div>

            {/* card 7 */}
            <div class="card" className='TradeListing_card'>
                <img src={tl7} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Trippin’ Ape Tribe #7794</h6>
                    <h6 class="card-sub-title">Trippin Ape Tribe</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="trade-card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>29</h6>
                    </div>

                    {/* <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">Trippin Ape Tribe</a>
                        
                    </div> */}
                </div>
            </div>

            {/* card 8 */}
            <div class="card" className='TradeListing_card'>
                <img src={tl8} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Rarikey #801</h6>
                    <h6 class="card-sub-title">Rarikeys</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="trade-card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>25</h6>
                    </div>

                    {/* <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">Trippin Ape Tribe</a>
                        
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default TradeListingCollectionList;