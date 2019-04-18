import React from 'react';
import * as CONSTANTS from './../../../constants';
import './Projects.css';
import Box from './Box.js'
import titleImg from './images/title.png';
const Projects =()=>{

return(

	<div className='projects-main-container'>


		<div className='projects-inner-container'>

			<div className="upper-div">
				<div className='upper-div-animation'> </div>

				<div className='inner-upper-div'>

					<Box type='upper' box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX1} />

					<Box type='upper' box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX2} />

					<Box type='upper' box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX3} />

					<Box type='upper' box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX4} />

				</div>

			</div>

			<div className="bottom-div">

				<div className='bottom-div-animation'> </div>

				<div className='inner-bottom-div'>

					<Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX5} />

					<Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX6} />

					<Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX7} />

					<Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX8} />

				</div>

			</div>
			
		</div>


	<div className='animated-title-projects'> <img src={titleImg} /> </div>




	</div>
	);

}

export default Projects;