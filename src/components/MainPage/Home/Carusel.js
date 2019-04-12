import React from 'react';
import './Carusel.css';
const Carusel =()=>{



const getImagePosition=(e)=>{
	const pos = e.target.getAttribute('pos');
	
}




	return(
		<div>
			  <span pos='0' onClick={getImagePosition} className="dot" ></span> 
			  <span pos='1' onClick={getImagePosition} className="dot" ></span> 
			  <span pos='2' onClick={getImagePosition} className="dot" ></span> 
		</div>
		);


}


export default Carusel;