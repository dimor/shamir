import React from 'react';
import * as CONSTANTS from '../constants';
import './MainNavigation.css';


const MainNavigation = () => {
  return (
    <div className="main_nav">
   	<ul>
   		<li><a href=''>{CONSTANTS.MAIN_MENU_ABOUT_STRING}</a></li>
   	    <li>|</li>
      	<li><a href=''>{CONSTANTS.MAIN_MENU_PROJECTS_STRING}</a></li>
      	<li>|</li>
      	<li><a href=''>{CONSTANTS.MAIN_MENU_PRODUCTS_STRING}</a></li>
   	</ul>

    </div>
  );
}

export default MainNavigation;
