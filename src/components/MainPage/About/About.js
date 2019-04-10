import React from 'react';
import * as CONSTANTS from './../../../constants';
import './About.css';
import chair from './chair.png';

const About =()=>{

return(

	<div className='about'>

		<div className='grid_about'>

			<div className='about_animated_title'><div></div></div>

			<div className='paragraphs'>
				<p> {CONSTANTS.MAIN_PAGE_ABOUT_P1}</p>
				<p> {CONSTANTS.MAIN_PAGE_ABOUT_P2}</p>
				<p> {CONSTANTS.MAIN_PAGE_ABOUT_P3}</p>
				<p> {CONSTANTS.MAIN_PAGE_ABOUT_P4}</p>
			</div>

			<div className='about_animated_block'><div></div> </div>

		</div>

		<div className='floating-img'><img className='about-img' src={chair} /></div>

	</div>
	);

}

export default About;