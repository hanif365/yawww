import React from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Header from '../../components/YawwComponent/Header/Header';
import NewCollections from '../../components/YawwComponent/NewCollections/NewCollections';
import RecentTrade from '../../components/YawwComponent/RecentTrade/RecentTrade';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <RecentTrade></RecentTrade>
            <NewCollections></NewCollections>
            <Footer></Footer>
        </div>
    );
};

export default Home;