import React from 'react';
import AnimatedTitle from './AnimatedTitle.js';
import './Home.css';
import * as CONSTANTS from './../../../constants';
import chair from './chair.png';
import Carusel from './Carusel.js';

const Home=()=>{

	return(


		<div className='home'> 

			<div className='grid'>	
				<div className='white-block'></div>
				<div className='animated'></div>
			</div>
			<div className='text-desc'> <p>{CONSTANTS.MAIN_PAGE_HOME_TEXT}</p></div>
			<div className='skipper_car'><Carusel  /></div>
			
			<img className='img-show' src={chair} />
			

		</div>

		);

}


export default Home;