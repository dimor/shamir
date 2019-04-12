import React from 'react';
import AnimatedTitle from './AnimatedTitle.js';
import './Home.css';
import * as CONSTANTS from './../../../constants';

import Carusel from './Carusel.js';
import img from {CONSTANTS.MAIN_PAGE_HOME_ARRAY_IMAGES[defaultImage]};

const Home=()=>{




let defaultImage = 0;


	{console.log(img)}


	return(


		<div className='home'> 

			<div className='grid'>	
				<div className='white-block'></div>
				<div className='animated'></div>
			</div>
			<div className='text-desc'> <p>{CONSTANTS.MAIN_PAGE_HOME_TEXT}</p></div>
			<div className='skipper_car'><Carusel/></div>
			
			<img className='img-show' src={CONSTANTS.MAIN_PAGE_HOME_ARRAY_IMAGES[defaultImage]} />
		

		</div>

		);

}


export default Home;