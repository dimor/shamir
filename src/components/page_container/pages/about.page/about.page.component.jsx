import React from 'react';
import './about.page.styles.css'
import * as CONSTANTS from './about.page.constants';
import Lottie from 'react-lottie';
import animationData from './animations/data.json';
import chair from './images/chair.png';

const AboutPage =()=>{

    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData
      };



    return(

        <div className='about'>

		<div className='about_animated_title'><Lottie  options={defaultOptions} /></div>

		<div className='main_about_container'>

			<div className='grid_about'>

				<div >
					

				</div>

				<div className='paragraphs'>
					<p> {CONSTANTS.MAIN_PAGE_ABOUT_P1}</p>
					<p> {CONSTANTS.MAIN_PAGE_ABOUT_P2}</p>
					<p> {CONSTANTS.MAIN_PAGE_ABOUT_P3}</p>
					<p> {CONSTANTS.MAIN_PAGE_ABOUT_P4}</p>
				</div>

				<div className='about_animated_block'>

					<img src={chair} alt='chair'/>

					<div className="about-block"> </div>


				</div>


			</div>

		</div>
	</div>
    );


}

export default AboutPage;