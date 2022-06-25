import React from 'react';
import './ListingCollection.css';
import ListingCollectionList from '../ListingCollectionList/ListingCollectionList'

const ListingCollection = () => {
    return (
        <div className='container '>
            <div className='d-flex justify-content-between mx-4 mx-md-0'>
                <li class="nav-item dropdown dropdown-btn">
                    <a class="nav-link nav-link-listing dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Amount (SOL)
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>


                <div className='d-flex '>
                    <p className='m-md-2 listing-result'>35,8745 Results</p>
                    <li class="nav-item dropdown dropdown-btn">
                        <a class="nav-link nav-link-listing dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Recently Active
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </div>
            </div>

            <ListingCollectionList></ListingCollectionList>

        </div>
    );
};

export default ListingCollection;