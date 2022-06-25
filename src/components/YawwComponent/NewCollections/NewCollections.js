import React from 'react';
import NewCollectionsLists from '../NewCollectionsLists/NewCollectionsLists';
import './NewCollections.css';

const NewCollections = () => {
    return (
        <div className='container pt-5'>
            <div className='d-flex justify-content-between mx-3 mx-md-0'>
                <h4 className='new-collection-title'>New Collections</h4>
                <p className='text-explore-new-collection'>EXPLORE MORE</p>
            </div>

            <NewCollectionsLists></NewCollectionsLists>
        </div>
    );
};

export default NewCollections;