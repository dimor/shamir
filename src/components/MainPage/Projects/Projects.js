import React from 'react';
import * as CONSTANTS from './../../../constants';
import './Projects.css';
import Box from './Box.js'

const Projects =()=>{

return(

	<div className='projects'>

		<div className="upper-div">

		<Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX1} />

		<Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX2} />

		<Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX3} />

		<Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX4} />

		</div>

		<div className="bottom-div">

		<Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX5} />

		<Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX6} />

		<Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX7} />

		<Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX8} />

		</div>

	</div>
	);

}

export default Projects;