import React from 'react';
import './social_icons.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialIcons=()=>{


    return(

    <ul className='social_icons'>
        <li> <a href='http://facebook.com'><FontAwesomeIcon size='2x' icon={faFacebook} /></a> </li>
        <li> <a href='http://instagram.com'><FontAwesomeIcon size='2x' icon={faInstagram} /></a> </li>
    </ul>

    );

}

export default SocialIcons;