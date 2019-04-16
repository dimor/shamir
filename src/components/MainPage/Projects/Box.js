import React from 'react';
import * as CONSTANTS from './../../../constants';
import './Box.css';

const Box =(props)=>{

const{title} = props.box;
const{path} = props.box;



const margin = props.type==='upper'?'1.0em 4em 1.5em 1.5em':'1.0em 1.5em 1.5em 4em'

const divStyle = {
  backgroundImage: `url(${require(`${path}`)})`,
  margin: margin
};


return(






	<div className='box'>

	<img src={require( `${ path }` )} alt={title} />

		</div>


	);

}

export default Box;