import React from 'react';
import HelpFaqCollection from '../../components/LoanComponents/HelpFaqCollection/HelpFaqCollection';
import ContactFaqCollection from '../../components/MoreComponent/Contact/ContactFaqCollection/ContactFaqCollection';
import ContactTopContent from '../../components/MoreComponent/Contact/ContactTopContent/ContactTopContent';
import Navbar from '../../components/Shared/Navbar/Navbar';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ContactTopContent></ContactTopContent>
            {/* <HelpFaqCollection></HelpFaqCollection> */}
            <ContactFaqCollection></ContactFaqCollection>
        </div>
    );
};

export default Contact;