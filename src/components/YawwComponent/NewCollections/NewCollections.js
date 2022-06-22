import React from 'react';
import NewCollectionsLists from '../NewCollectionsLists/NewCollectionsLists';
import './NewCollections.css';

const NewCollections = () => {
    return (
        <div className='container pt-5'>
            <div className='d-flex justify-content-between'>
                <h4>New Collections</h4>
                <p className='text-explore'>EXPLORE MORE</p>
            </div>

            <NewCollectionsLists></NewCollectionsLists>
        </div>
    );
};

export default NewCollections;