import React from 'react';
import HistoryCollectionList from '../HistoryCollectionList/HistoryCollectionList';
import './HistoryCollection.css';

const HistoryCollection = () => {
    return (
        <div className='container '>
            <div className='mx-4 mx-md-4 d-flex justify-content-between'>
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
                    <p className='m-md-2 listing-result'>35,8745 Results</p>
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

            <HistoryCollectionList></HistoryCollectionList>
        </div>
    );
};

export default HistoryCollection;