import React from 'react';
import HelpFaqCollection from '../../../components/LoanComponents/HelpFaqCollection/HelpFaqCollection';
import LoanNav from '../../../components/LoanComponents/LoanNav/LoanNav';
import LoanTopContent from '../../../components/LoanComponents/LoanTopContent/LoanTopContent';
import Navbar from '../../../components/Shared/Navbar/Navbar';
import './HelpFaq.css';

const HelpFaq = () => {
    return (
        <div>
            <Navbar></Navbar>
            <LoanTopContent></LoanTopContent>
            <LoanNav name="help-faq"></LoanNav>
            <HelpFaqCollection></HelpFaqCollection>
        </div>
    );
};

export default HelpFaq;