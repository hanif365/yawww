import React from 'react';
import './ContactTopContent.css';
import discordImg from '../../../../Assets/Images/discord.png';
import twitterImg from '../../../../Assets/Images/twitter.png';
import mailImg from '../../../../Assets/Images/mail.png';
import youtubeImg from '../../../../Assets/Images/youtube.png';

const ContactTopContent = () => {
    return (
        <div className='container ContactTopContent-container'>
            <div className="row">
                <h4>Contact</h4>
                <p>We are always open to feedback! If you wish to get <br /> in touch, join our Discord or hit us up in Twitter.</p>

                <div className='contact-social-icon-group'>
                    <img src={discordImg} alt="" className='discordImg' />
                    <img src={twitterImg} alt="" className='twitterImg' />
                    <img src={mailImg} alt="" className='mailImg' />
                    <img src={youtubeImg} alt="" className='youtubeImg' />
                </div>

                <div className='pt-5'>
                    <p>FAQ</p>
                    <p>If you have any other questions, please get in touch.</p>
                </div>
            </div>

        </div>
    );
};

export default ContactTopContent;