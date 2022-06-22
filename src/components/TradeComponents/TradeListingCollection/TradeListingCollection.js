import React from 'react';
import TradeListingCollectionList from '../TradeListingCollectionList/TradeListingCollectionList';
import './TradeListingCollection.css';

const TradeListingCollection = () => {
    return (
        <div className='container '>
            {/* <div className='d-flex justify-content-between'>
                <li class="nav-item dropdown dropdown-btn">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Amount (SOL)
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>


                <div className='d-flex '>
                    <p className='m-2'>35,8745 Results</p>
                    <li class="nav-item dropdown dropdown-btn">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Recently Active
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </div>
            </div> */}

            <TradeListingCollectionList></TradeListingCollectionList>
        </div>
    );
};

export default TradeListingCollection;