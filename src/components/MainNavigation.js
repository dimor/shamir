import React from 'react';
import * as CONSTANTS from '../constants';
import './MainNavigation.css';


const MainNavigation = ({changeRoute}) => {



  return (
    <div className="main_nav">

      <div className="inside_div_center">

         	<ul>
         	   	<li><a >{CONSTANTS.MAIN_MENU_PRODUCTS_STRING}</a></li>
         	    <li>|</li>
            	<li><a href='#' onClick={()=>changeRoute(CONSTANTS.ROUTE_PROJECTS)} >{CONSTANTS.MAIN_MENU_PROJECTS_STRING}</a></li>
            	<li>|</li>
            	<li><a  href='#'  onClick={()=>changeRoute(CONSTANTS.ROUTE_ABOUT)}>{CONSTANTS.MAIN_MENU_ABOUT_STRING}</a></li>
         	</ul>
          
      </div>

    </div>
  );
}

export default MainNavigation;
