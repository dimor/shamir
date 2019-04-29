import React from 'react';
import './Menu.css';
import menu from './menu.png';


const Menu =()=>{


/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}



	return(
		<div>

				<button className="openbtn" onClick={openNav()} >&#9776; Toggle Sidepanel</button> 
				  <div id="mySidepanel" className="sidepanel">
				  <a href={javascript:void(0)} className="closebtn" onClick={closeNav()}>&times;</a>
				  <a href="#">About</a>
				  <a href="#">Services</a>
				  <a href="#">Clients</a>
				  <a href="#">Contact</a>
				</div>


		</div>
		);


}


export default Menu;