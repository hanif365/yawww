import React from 'react';
import './NewCollectionsLists.css';
import t13 from '../../../Assets/Images/t13.png';
import t14 from '../../../Assets/Images/t14.png';
import t15 from '../../../Assets/Images/t15.png';
import t16 from '../../../Assets/Images/t16.png';
import rightArrow from '../../../Assets/Images/right-arrow.png';
import leftArrow from '../../../Assets/Images/left-arrow.png';

const NewCollectionsLists = () => {
    return (
        <div className='NewCollectionList_container'>
            <div className='leftArrow'>
                <img src={leftArrow} alt="" />
            </div>
            <div class="card" className='NewCollectionList_card'>
                <div className='btn-group-new-list'>
                    <a href="#" class="btn btn-new-list">NEW</a>
                </div>

                <img src={t13} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title new-collection-card-main-title">Gangs Of New Pork: Piggy Blinders</h6>
                    <div className='collection-link'>
                        <a href="#" >View collection</a>
                    </div>
                </div>
            </div>

            {/* second card */}
            <div class="card" className='NewCollectionList_card'>
                <div className='btn-group-new-list'>
                    <a href="#" class="btn btn-new-list">NEW</a>
                </div>

                <img src={t14} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title new-collection-card-main-title">Pyth Alligators</h6>
                    <div className='collection-link'>
                        <a href="#" >View collection</a>
                    </div>
                </div>
            </div>

            {/* third card */}
            <div class="card" className='NewCollectionList_card'>
                <div className='btn-group-new-list'>
                    <a href="#" class="btn btn-new-list">NEW</a>
                </div>

                <img src={t15} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title new-collection-card-main-title">The Lost Apes</h6>
                    <div className='collection-link'>
                        <a href="#" >View collection</a>
                    </div>
                </div>
            </div>

            {/* fourth card */}
            <div class="card" className='NewCollectionList_card'>
                <div className='btn-group-new-list'>
                    <a href="#" class="btn btn-new-list">NEW</a>
                </div>

                <img src={t16} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h6 class="card-title new-collection-card-main-title">FatCats Capital</h6>
                    <div className='collection-link'>
                        <a href="#" >View collection</a>
                    </div>
                </div>
            </div>

            <div className='rightArrow'>
                <img src={rightArrow} alt="" />
            </div>
        </div>

    )
};

export default NewCollectionsLists;