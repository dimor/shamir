import React from 'react';
import * as CONSTANTS from './../../../constants';
import './About.css';
import chair from './images/chair.png';
import about from './images/about.png';
const About =()=>{

return(

	<div className='about'>

		<div className='grid_about'>

			<div className='about_animated_title'>
				
				<div><img src={about} /></div>

			</div>

			<div className='paragraphs'>
				<p> {CONSTANTS.MAIN_PAGE_ABOUT_P1}</p>
				<p> {CONSTANTS.MAIN_PAGE_ABOUT_P2}</p>
				<p> {CONSTANTS.MAIN_PAGE_ABOUT_P3}</p>
				<p> {CONSTANTS.MAIN_PAGE_ABOUT_P4}</p>
			</div>

			<div className='about_animated_block'>

				<img src={chair} />

				<div className="about-block"> </div>


			</div>


		</div>

	</div>
	);

}

export default About;