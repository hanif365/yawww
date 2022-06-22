import React from 'react';
import './HistoryCollectionList.css';
import h1 from '../../../Assets/Images/h1.png';
import h2 from '../../../Assets/Images/h2.png';
import h3 from '../../../Assets/Images/h3.png';
import h4 from '../../../Assets/Images/h4.png';
import h5 from '../../../Assets/Images/h5.png';
import h6 from '../../../Assets/Images/h6.png';
import h7 from '../../../Assets/Images/h7.png';
import h8 from '../../../Assets/Images/h8.png';
import loanClock from '../../../Assets/Images/loan-clock.png';
import loanDB from '../../../Assets/Images/loan-db.png';
import solanaImg from '../../../Assets/Images/solana_logo.png';

const HistoryCollectionList = () => {
    return (
        <div className='HistoryCollectionList_container'>
            <div class="card" className='HistoryCollectionList_card'>
                <div className='btn-group-funded-loan'>
                    <a href="#" class="btn btn-funded-loan">Funded Loan</a>
                </div>
                <img src={h1} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Quantum Trader #5403</h6>
                    <h6 class="card-sub-title">Quantum Trader</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 14 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 1.9%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Current Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>5.54 <span className='text-add-highlight'>+0.11</span></h6>
                    </div>
                </div>
            </div>

            {/* card 2 */}
            <div class="card" className='HistoryCollectionList_card'>
                <div className='btn-group-funded-loan'>
                    <a href="#" class="btn btn-funded-loan">Funded Loan</a>
                </div>
                <img src={h2} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Okay Bear #8452</h6>
                    <h6 class="card-sub-title">Okay Bear</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 30 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 1.1%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Current Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>73.3 <span className='text-add-highlight'>+0.81</span></h6>
                    </div>
                </div>
            </div>

            {/* card 3 */}
            <div class="card" className='HistoryCollectionList_card'>
                <div className='btn-group-funded-loan'>
                    <a href="#" class="btn btn-funded-loan">Funded Loan</a>
                </div>
                <img src={h3} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Astrals #8410</h6>
                    <h6 class="card-sub-title">Astrals</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 10 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 3.8%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Current Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>7.1 <span className='text-add-highlight'>+0.27</span></h6>
                    </div>
                </div>
            </div>

            {/* card 4 */}
            <div class="card" className='HistoryCollectionList_card'>
                <div className='btn-group-funded-loan'>
                    <a href="#" class="btn btn-funded-loan">Funded Loan</a>
                </div>
                <img src={h4} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Astrals #8025</h6>
                    <h6 class="card-sub-title">Astrals</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 10 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 3.8%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Current Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>7.1 <span className='text-add-highlight'>+0.27</span></h6>
                    </div>
                </div>
            </div>

            {/* card 5 */}
            <div class="card" className='HistoryCollectionList_card'>
                <div className='btn-group-funded-loan'>
                    <a href="#" class="btn btn-funded-loan">Funded Loan</a>
                </div>
                <img src={h5} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Okay Bear #4364</h6>
                    <h6 class="card-sub-title">Okay Bear</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 24 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 1.1%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Current Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>105.42 <span className='text-add-highlight'>+1.13</span></h6>
                    </div>
                </div>
            </div>

            {/* card 6 */}
            <div class="card" className='HistoryCollectionList_card'>
                <div className='btn-group-funded-loan'>
                    <a href="#" class="btn btn-funded-loan">Funded Loan</a>
                </div>
                <img src={h6} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Bridged #5419</h6>
                    <h6 class="card-sub-title">The Bridged</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 15 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 2.7%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Current Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>3.03 <span className='text-add-highlight'>+0.08</span></h6>
                    </div>
                </div>
            </div>

            {/* card 7 */}
            <div class="card" className='HistoryCollectionList_card'>
                <div className='btn-group-funded-loan'>
                    <a href="#" class="btn btn-funded-loan">Funded Loan</a>
                </div>
                <img src={h7} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Okay Bear #3859</h6>
                    <h6 class="card-sub-title">Okay Bear</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 24 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 1.1%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Current Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>95.38 <span className='text-add-highlight'>+1.03</span></h6>
                    </div>
                </div>
            </div>

            {/* card 8 */}
            <div class="card" className='HistoryCollectionList_card'>
                <div className='btn-group-funded-loan'>
                    <a href="#" class="btn btn-funded-loan">Funded Loan</a>
                </div>
                <img src={h8} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title card-main-title">Mindfolk Cabins</h6>
                    <h6 class="card-sub-title">Mindfolk Cabins</h6>
                    <div className='hr'>

                    </div>

                    <div className='day-percent'>
                        <p><img src={loanClock} className="loanClock-img" alt="" /> 10 Days</p>
                        <p><img src={loanDB} className="loanDB-img" alt="" /> 4.1%</p>
                    </div>

                    <p className='listing-text-highlight'>Loan + Current Return</p>

                    <div className='d-flex '>
                        <img src={solanaImg} alt="" className='solana-img' />
                        <h6 className='solana-price'>13.2 <span className='text-add-highlight'>+0.54</span></h6>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HistoryCollectionList;