import React from 'react';
import './ListingCollectionList.css';
import l1 from '../../../Assets/Images/l1.png';
import l2 from '../../../Assets/Images/l2.png';
import l3 from '../../../Assets/Images/l3.png';
import l4 from '../../../Assets/Images/l4.png';
import l5 from '../../../Assets/Images/l5.png';
import l6 from '../../../Assets/Images/l6.png';
import l7 from '../../../Assets/Images/l7.png';
import l8 from '../../../Assets/Images/l8.png';
import solanaImg from '../../../Assets/Images/solana_logo.png';
import loanDB from '../../../Assets/Images/loan-db.png';
import loanClock from '../../../Assets/Images/loan-clock.png';

const ListingCollectionList = () => {
    return (
        <div className='ListingCollectionList_container'>
            <div class="card" className='ListingCollectionList_card'>
                <img src={l1} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Mad Scientist #856</h6>
                    <h6 class="card-sub-title">Communi3</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 9 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 7.6%</p>
                    </div>

                    <div className='apy-percent'>
                        <p><span className='listing-text-highlight'>APY</span> 310.2%</p>
                        <p><span className='listing-text-highlight'>LTF</span> 91.1%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>35.3 <span className='text-add-highlight'>+2.7</span></h6>
                    </div>
                </div>
            </div>

            {/* card 2 */}
            <div class="card" className='ListingCollectionList_card'>
                <img src={l2} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Bridged #5826</h6>
                    <h6 class="card-sub-title">The Bridged</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 20 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 17.6%</p>
                    </div>

                    <div className='apy-percent'>
                        <p><span className='listing-text-highlight'>APY</span> 322.1%%</p>
                        <p className='text-danger'><span className='listing-text-highlight'>LTF</span> 511.3%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>20.4 <span className='text-add-highlight'>+3.6</span></h6>
                    </div>
                </div>
            </div>

            {/* card 3 */}
            <div class="card" className='ListingCollectionList_card'>
                <img src={l3} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Bridged #6598</h6>
                    <h6 class="card-sub-title">The Bridged</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 30 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 7.3%</p>
                    </div>

                    <div className='apy-percent'>
                        <p><span className='listing-text-highlight'>APY</span> 88.8%</p>
                        <p><span className='listing-text-highlight'>LTF</span> 83.5%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>3.33 <span className='text-add-highlight'>+0.24</span></h6>
                    </div>
                </div>
            </div>

            {/* card 4 */}
            <div class="card" className='ListingCollectionList_card'>
                <img src={l4} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Bridged #6598</h6>
                    <h6 class="card-sub-title">The Bridged</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 30 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 7.6%</p>
                    </div>

                    <div className='apy-percent'>
                        <p><span className='listing-text-highlight'>APY</span> 93.1%</p>
                        <p><span className='listing-text-highlight'>LTF</span> 88.5%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>3.53 <span className='text-add-highlight'>+0.27</span></h6>
                    </div>
                </div>
            </div>

            {/* card 5 */}
            <div class="card" className='ListingCollectionList_card'>
                <img src={l5} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Okay Bear #4364</h6>
                    <h6 class="card-sub-title">Okay Bear</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 30 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 3.6%</p>
                    </div>

                    <div className='apy-percent'>
                        <p><span className='listing-text-highlight'>APY</span> 46.7%</p>
                        <p><span className='listing-text-highlight'>LTF</span> 64.7%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>105.42 <span className='text-add-highlight'>+3.78</span></h6>
                    </div>
                </div>
            </div>

            {/* card 6 */}
            <div class="card" className='ListingCollectionList_card'>
                <img src={l6} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Degen Trash Panda #2866</h6>
                    <h6 class="card-sub-title">Degenerate Trash Panda</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 6 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 3.8%</p>
                    </div>

                    <div className='apy-percent'>
                        <p><span className='listing-text-highlight'>APY</span> 233.6%</p>
                        <p><span className='listing-text-highlight'>LTF</span> 96.6%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>7.03 <span className='text-add-highlight'>+0.27</span></h6>
                    </div>
                </div>
            </div>

            {/* card 7 */}
            <div class="card" className='ListingCollectionList_card'>
                <img src={l7} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Okay Bear #3849</h6>
                    <h6 class="card-sub-title">Okay Bear</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 28 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 3.8%</p>
                    </div>

                    <div className='apy-percent'>
                        <p><span className='listing-text-highlight'>APY</span> 49.2%</p>
                        <p><span className='listing-text-highlight'>LTF</span> 58.5%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>95.4 <span className='text-add-highlight'>+3.6</span></h6>
                    </div>
                </div>
            </div>

            {/* card 8 */}
            <div class="card" className='ListingCollectionList_card'>
                <img src={l8} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Bridged #6598</h6>
                    <h6 class="card-sub-title">The Bridged</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 45 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 3%</p>
                    </div>

                    <div className='apy-percent'>
                        <p><span className='listing-text-highlight'>APY</span> 24.3%</p>
                        <p><span className='listing-text-highlight'>LTF</span> 68.6%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>30.1 <span className='text-add-highlight'>+0.9</span></h6>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ListingCollectionList;