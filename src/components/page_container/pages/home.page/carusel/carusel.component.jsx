import React from 'react';
import './carusel.styles.css';


const Carusel =({changeImage})=>{


const getImagePosition=(e)=>{
	let pos = e.target.getAttribute('pos');
	changeImage(pos);
}




	return(
		<div className='dots'>
			  <span pos='0' onClick={getImagePosition} className='dot'></span> 
			  <span pos='1' onClick={getImagePosition} className='dot'></span> 
			  <span pos='2' onClick={getImagePosition} className='dot'></span> 
		</div>
		);


}


export default Carusel;