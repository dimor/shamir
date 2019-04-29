import React from 'react';
import './Menu.css';
import menu from './menu.png';


const Menu =()=>{

const openNav = () => {
            this.refs.mysidemenu.style.width = "250px";
        }



const closeNav = () => {
            this.refs.mysidemenu.style.width = "0";
        }
/* Set the width of the sidebar to 250px (show it) */
/*function openNav() {
 this.refs.side.style.width = "250px";
}*/

/* Set the width of the sidebar to 0 (hide it) */
/*function closeNav() {
 this.refs.side.style.width = "0";
}
*/


	return(
		<div>

				<button className="openbtn" onClick={openNav()} >Menu Toggle Sidepanel</button> 
				  <div ref='side' className="sidepanel" ref={ref => this.mysidemenu = ref}>
				  <a href={void(0)} className="closebtn" onClick={closeNav()}>Menu</a>
				  <a href="#">About</a>
				  <a href="#">Services</a>
				  <a href="#">Clients</a>
				  <a href="#">Contact</a>
				</div>


		</div>
		);


}


export default Menu;