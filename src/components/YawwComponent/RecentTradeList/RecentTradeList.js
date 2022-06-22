import React from 'react';
import './RecentTradeList.css';
import t1 from '../../../Assets/Images/t1.png';
import t2 from '../../../Assets/Images/t2.png';
import t3 from '../../../Assets/Images/t3.png';
import t4 from '../../../Assets/Images/t4.png';
import t5 from '../../../Assets/Images/t5.png';
import t6 from '../../../Assets/Images/t6.png';
import t7 from '../../../Assets/Images/t7.png';
import t8 from '../../../Assets/Images/t8.png';
import t9 from '../../../Assets/Images/t9.png';
import t10 from '../../../Assets/Images/t10.png';
import t11 from '../../../Assets/Images/t11.png';
import t12 from '../../../Assets/Images/t12.png';

import solanaImg from '../../../Assets/Images/solana_logo.png';

const RecentTradeList = () => {
    return (
        <div className='RecentTradeList_container'>
            <div class="card" className='RecentTradeList_card'>
                <img src={t1} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Nuked Ape #2671</h6>
                    <h6 class="card-sub-title">Nuked Ape</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>11.5</h6>
                    </div>

                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>

            {/* second card */}
            <div class="card" className='RecentTradeList_card'>
                <img src={t2} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Trippin’ Ape Tribe #9345</h6>
                    <h6 class="card-sub-title">Trippin Ape Tribe</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>31.99</h6>
                    </div>

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">OG Atadians</a>
                        {/* <a href="#" class="btn btn-trade-list">OG Atadians</a> */}
                    </div>

                </div>
            </div>

            {/* third card */}
            <div class="card" className='RecentTradeList_card'>
                <img src={t3} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Trippin’ Ape Tribe #7794</h6>
                    <h6 class="card-sub-title">Trippin Ape Tribe</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>60</h6>
                    </div>

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">Cets On Creck</a>
                        {/* <a href="#" class="btn btn-trade-list">OG Atadians</a> */}
                    </div>
                </div>
            </div>

            {/* fourth card */}
            <div class="card" className='RecentTradeList_card'>
                <img src={t4} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Capsule X #4907</h6>
                    <h6 class="card-sub-title">Yaku Corp: Capsule X</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="card-lower-title">LOOKING FOR</h6>

                    {/* <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>11.5</h6>
                    </div> */}

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">SOLFUL</a>
                        <a href="#" class="btn btn-trade-list">Jikan Studios</a>
                    </div>
                </div>
            </div>

            {/* fifth card */}
            <div class="card" className='RecentTradeList_card'>
                <img src={t5} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Dead Reject #1493</h6>
                    <h6 class="card-sub-title">Dead Reject</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>11.5</h6>
                    </div>

                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>

            {/* sixth card */}
            <div class="card" className='RecentTradeList_card'>
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

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list-wide">Famous Fox Federation</a>
                        <a href="#" class="btn btn-trade-list-wide">OG Atadians</a>
                    </div>
                </div>
            </div>

            {/* seventh card */}
            <div class="card" className='RecentTradeList_card'>
                <img src={t7} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">WOOFers #1562</h6>
                    <h6 class="card-sub-title">Woof</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>10</h6>
                    </div>

                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>

            {/* eighth card */}
            <div class="card" className='RecentTradeList_card'>
                <img src={t8} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Trippin’ Ape Tribe #1446</h6>
                    <h6 class="card-sub-title">Trippin Ape Tribe</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="card-lower-title">LOOKING FOR</h6>

                    {/* <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>11.5</h6>
                    </div> */}

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">SOLFUL</a>
                        <a href="#" class="btn btn-trade-list">Jikan Studios</a>
                    </div>
                </div>
            </div>

            {/* ninth card */}
            <div class="card" className='RecentTradeList_card'>
                <img src={t9} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">TombStoned High Society #3970</h6>
                    <h6 class="card-sub-title">TombStoned High Society</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>11.5</h6>
                    </div>

                    {/* <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">SOLFUL</a>
                        <a href="#" class="btn btn-trade-list">Jikan Studios</a>
                    </div> */}
                </div>
            </div>

            {/* tenth card */}
            <div class="card" className='RecentTradeList_card'>
                <img src={t10} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Trippin’ Ape Tribe #5221</h6>
                    <h6 class="card-sub-title">Trippin Ape Tribe</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>31.99</h6>
                    </div>

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">OG Atadians</a>
                        {/* <a href="#" class="btn btn-trade-list">Jikan Studios</a> */}
                    </div>
                </div>
            </div>

            {/* eleven card */}
            <div class="card" className='RecentTradeList_card'>
                <img src={t11} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Trippin’ Ape Tribe #1418</h6>
                    <h6 class="card-sub-title">Trippin Ape Tribe</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="card-lower-title">LOOKING FOR</h6>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>60</h6>
                    </div>

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">Cets On Creck</a>
                        {/* <a href="#" class="btn btn-trade-list">Jikan Studios</a> */}
                    </div>
                </div>
            </div>

            {/* twelve card */}
            <div class="card" className='RecentTradeList_card'>
                <img src={t12} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Crypto Coral #3239</h6>
                    <h6 class="card-sub-title">Crypto Coral Tribe</h6>
                    <div className='hr'>

                    </div>

                    <h6 class="card-lower-title">LOOKING FOR</h6>

                    {/* <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>11.5</h6>
                    </div> */}

                    <div className='btn-group-trade-list'>
                        <a href="#" class="btn btn-trade-list">SOLFUL</a>
                        <a href="#" class="btn btn-trade-list">Jikan Studios</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RecentTradeList;