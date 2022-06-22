import React from 'react';
import NewCollectionsLists from '../../YawwComponent/NewCollectionsLists/NewCollectionsLists';
import ListingCollectionList from '../ListingCollectionList/ListingCollectionList';
import './ListingCollection.css';

const ListingCollection = () => {
    return (
        <div className='container '>
            <div className='d-flex justify-content-between'>
                {/* <h4>New Collections</h4> */}
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


                {/* <p className='text-explore'>EXPLORE MORE</p> */}
            </div>

            <ListingCollectionList></ListingCollectionList>
        </div>
    );
};

export default ListingCollection;