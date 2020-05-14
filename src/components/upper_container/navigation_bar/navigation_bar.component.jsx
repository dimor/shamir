import React from 'react';
import './navigation_bar.styles.css';
import * as CONSTANTS from './navigation_bar.constants';
import {Link,useRouteMatch} from "react-router-dom";




const NavigationBar=()=>{


	const ActiveLink =({ label, to, activeOnlyWhenExact })=>{
		let match = useRouteMatch({
			path: to,
			exact: activeOnlyWhenExact
		  });
		  return (
			<div className={match ? "custom" : ""}>
			  <Link to={to}>{label}</Link>
			</div>
		  );
	};


return(

    <div className='navigation_bar'> 
        
        <ul>
			<li><ActiveLink to="/about" label={CONSTANTS.MAIN_MENU_ABOUT_STRING} /></li>
			<li>|</li>
			<li><ActiveLink to="/products" label={CONSTANTS.MAIN_MENU_PRODUCTS_STRING} /></li>
			<li>|</li>
			<li><ActiveLink to="/" label={CONSTANTS.MAIN_MENU_HOME_STRING} activeOnlyWhenExact={true} /></li>
		</ul>
        
    </div>
);

}

export default NavigationBar;