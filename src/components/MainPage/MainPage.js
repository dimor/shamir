import React,{Component} from 'react';
import './MainPage.css';
import './MainNavigation.css';
import Home from './Home/Home.js';
import About from './About/About.js';
import Projects from './Projects/Projects.js';
import * as CONSTANTS from './../../constants';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.png';
import Menu from './Menu.js';
import CheeseburgerMenu from 'cheeseburger-menu'
import menu from './menu.png';

class MainPage extends Component {


	constructor(){

		super();

		this.state = {menuIsOpen: false};
	}


	 openMenu =()=> {
    this.setState({ menuIsOpen: true })
    console.log('click');

  }

   closeMenu =()=> {
    this.setState({ menuIsOpen: false })
  }

	render(){



	return(

		<Router>

			<div className="main_nav">

			            <div className="inside_div_center">

				            <ul>
				         	   	<li><a >{CONSTANTS.MAIN_MENU_PRODUCTS_STRING}</a></li>
				         	    <li>|</li>
				            	<li><Link to='/projects/'>{CONSTANTS.MAIN_MENU_PROJECTS_STRING}</Link> </li>
				            	<li>|</li>
				            	<li><Link to='/about/'>{CONSTANTS.MAIN_MENU_ABOUT_STRING}</Link></li>
				         	</ul>
				          
				        </div>


				        <div className='main-nav-menu-btn' >
				        	<img src={menu} onClick={this.openMenu} />
						</div>

						        <CheeseburgerMenu 
						        isOpen={this.state.menuIsOpen} 
						        closeCallback={this.closeMenu}
						        right={true}
						        backgroundColor='black'
						        className="opacity"
						  
						        >

		  							<div className="my-menu-content">
									   
									      <div><Link to='/' onClick={this.closeMenu}>{CONSTANTS.MAIN_MENU_HOME_STRING}</Link></div>
									      <div><Link to="/projects" onClick={this.closeMenu}>{CONSTANTS.MAIN_MENU_PROJECTS_STRING}</Link></div>
									      <div><Link to="/about" onClick={this.closeMenu}>{CONSTANTS.MAIN_MENU_ABOUT_STRING}</Link></div>
									   
		  							</div>
		  			
								</CheeseburgerMenu>



				        <div className='main-nav-logo'> <img src={logo} /> </div>

			</div>


		    <div className='main-page'>

	   			<Route path="/" exact component={Home} />
			    <Route path="/about/" component={About} />
			    <Route path="/projects/" component={Projects} />


			</div>

		</Router>

		);
}
}


export default MainPage;