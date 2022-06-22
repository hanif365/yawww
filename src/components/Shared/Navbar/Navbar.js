import React from 'react';
import './Navbar.css';
import profileLogo from '../../../Assets/Images/profile_logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  navbar-container">
                <div class="container">
                    <Link to="/" class="navbar-brand">YAWWW</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mid_menu">
                            <li class="nav-item">
                                <Link to="/loans" class="nav-link active" aria-current="page">LOANS</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">TRADES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">TRADE APP</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">STAKE</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MORE
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        
                        <div>
                            <button className='btn_navbar'>Select Wallet</button>
                            <img src={profileLogo} alt="" className='profileLogo' />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;