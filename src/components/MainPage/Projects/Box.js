import React from 'react';
import * as CONSTANTS from './../../../constants';
import './Box.css';

const Box =(props)=>{

const{title} = props.box;
const{color} = props.box;

return(

	<div className='box' style={{'backgroundColor':color}}>

	<h2>{title}</h2>

		</div>


	);

}

export default Box;