import React from 'react';
import * as CONSTANTS from '../constants';
import './Bottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';


const Bottom =()=>{

	return (

		<div className='bottom'> 
	
			<ul>
				<li> <a href='http://facebook.com'><FontAwesomeIcon icon={faFacebook} /></a> </li>
					<li> <a href='http://instagram.com'><FontAwesomeIcon icon={faInstagram} /></a> </li>
			</ul>

		</div>

		);
}


export default Bottom;