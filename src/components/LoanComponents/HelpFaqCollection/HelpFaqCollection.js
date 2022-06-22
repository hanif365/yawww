import React from 'react';
import './HelpFaqCollection.css';

const HelpFaqCollection = () => {
    return (
        <div className='container'>
            <div className=' HelpFaqCollection-container'>
                <h4 className='pb-3'>Loans FAQ</h4>
                <p>We are always open to feedback! If you wish to get in <br /> touch, joir our Discord or hit us up in Twitter</p>
                {/* <button className='btn btn-wallet'>Select Wallet</button> */}
            </div>

            <div class="accordion  accordion-container pb-5" id="accordionExample">
                <div class="accordion-item mb-4">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" id="test1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is P2P lending?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            In peer-to-peer lending, there in no bank. Instead, platform users lend and barrow from
                            other users on the platform.
                        </div>
                    </div>
                </div>
                <div class="accordion-item mb-4">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" id="test2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How does the lending/borrowing process work?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            In peer-to-peer lending, there in no bank. Instead, platform users lend and barrow from
                            other users on the platform.
                        </div>
                    </div>
                </div>
                <div class="accordion-item mb-4">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" id="test3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Why should I take a loan?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            In peer-to-peer lending, there in no bank. Instead, platform users lend and barrow from
                            other users on the platform.
                        </div>
                    </div>
                </div>

                <div class="accordion-item mb-4">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" id="test4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Why should I fund a loan?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            In peer-to-peer lending, there in no bank. Instead, platform users lend and barrow from
                            other users on the platform.
                        </div>
                    </div>
                </div>

                <div class="accordion-item mb-4">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed" id="test5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            What happens when I don't pay off my loan in time? What is a grace period?
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            In peer-to-peer lending, there in no bank. Instead, platform users lend and barrow from
                            other users on the platform.
                        </div>
                    </div>
                </div>

                <div class="accordion-item mb-4">
                    <h2 class="accordion-header" id="headingSix">
                        <button class="accordion-button collapsed" id="test6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            What are the risks when lending?
                        </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            In peer-to-peer lending, there in no bank. Instead, platform users lend and barrow from
                            other users on the platform.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpFaqCollection;