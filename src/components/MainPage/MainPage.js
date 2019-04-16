import React from 'react';
import './MainPage.css';
import Home from './Home/Home.js';
import About from './About/About.js';
import Projects from './Projects/Projects.js';
import * as CONSTANTS from './../../constants';


const MainPage = (props)=>{

	const distanation = props.route;
	console.log(distanation);

	
	const router = ()=>{ 

			switch(distanation){
			case CONSTANTS.ROUTE_HOME:
			return <Home />;
			case CONSTANTS.ROUTE_PROJECTS:
				return <Projects />;
			case CONSTANTS.ROUTE_ABOUT:
				return <About />;
			default:
				return <Home/>;
		
			}
		}


	return(
		<div className='main-page'>
		{router()}
		</div>
		);
}


export default MainPage;