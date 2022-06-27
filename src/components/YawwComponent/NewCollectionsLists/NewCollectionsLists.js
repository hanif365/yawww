import React from 'react';
import './NewCollectionsLists.css';
import t13 from '../../../Assets/Images/t13.png';
import t14 from '../../../Assets/Images/t14.png';
import t15 from '../../../Assets/Images/t15.png';
import t16 from '../../../Assets/Images/t16.png';

import t9 from '../../../Assets/Images/t9.png';
import t10 from '../../../Assets/Images/t10.png';
import t11 from '../../../Assets/Images/t11.png';
import t12 from '../../../Assets/Images/t12.png';


import rightArrow from '../../../Assets/Images/right-arrow.png';
import leftArrow from '../../../Assets/Images/left-arrow.png';

// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      />
    );
  }

const NewCollectionsLists = () => {
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='NewCollectionList_container'>
            {/* <div className='leftArrow'>
                <img src={leftArrow} alt="" />
            </div> */}

            <Slider {...settings}>
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
                <div class="card" className='NewCollectionList_card card2'>
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
                <div class="card" className='NewCollectionList_card fourth-card'>
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

                {/* fourth card */}
                <div class="card" className='NewCollectionList_card fourth-card'>
                    <div className='btn-group-new-list'>
                        <a href="#" class="btn btn-new-list">NEW</a>
                    </div>

                    <img src={t9} class="card-img-top p-2" alt="..." />
                    <div class="card-body">
                        <h6 class="card-title new-collection-card-main-title">Pyth Alligators</h6>
                        <div className='collection-link'>
                            <a href="#" >View collection</a>
                        </div>
                    </div>
                </div>
                {/* fourth card */}
                <div class="card" className='NewCollectionList_card fourth-card'>
                    <div className='btn-group-new-list'>
                        <a href="#" class="btn btn-new-list">NEW</a>
                    </div>

                    <img src={t10} class="card-img-top p-2" alt="..." />
                    <div class="card-body">
                        <h6 class="card-title new-collection-card-main-title">FatCats Capital</h6>
                        <div className='collection-link'>
                            <a href="#" >View collection</a>
                        </div>
                    </div>
                </div>
                {/* fourth card */}
                <div class="card" className='NewCollectionList_card fourth-card'>
                    <div className='btn-group-new-list'>
                        <a href="#" class="btn btn-new-list">NEW</a>
                    </div>

                    <img src={t11} class="card-img-top p-2" alt="..." />
                    <div class="card-body">
                        <h6 class="card-title new-collection-card-main-title">FatCats Capital</h6>
                        <div className='collection-link'>
                            <a href="#" >View collection</a>
                        </div>
                    </div>
                </div>
                {/* fourth card */}
                <div class="card" className='NewCollectionList_card fourth-card'>
                    <div className='btn-group-new-list'>
                        <a href="#" class="btn btn-new-list">NEW</a>
                    </div>

                    <img src={t12} class="card-img-top p-2" alt="..." />
                    <div class="card-body">
                        <h6 class="card-title new-collection-card-main-title">The Lost Apes</h6>
                        <div className='collection-link'>
                            <a href="#" >View collection</a>
                        </div>
                    </div>
                </div>

            </Slider>

            {/* <div className='rightArrow'>
                <img src={rightArrow} alt="" />
            </div> */}
        </div>

    )
};

export default NewCollectionsLists;