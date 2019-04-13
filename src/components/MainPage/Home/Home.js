import React,{Component} from 'react';
import AnimatedTitle from './AnimatedTitle.js';
import './Home.css';
import * as CONSTANTS from './../../../constants';
import Carusel from './Carusel.js';





const initialState={

	currentImgPath:CONSTANTS.MAIN_PAGE_HOME_ARRAY_IMAGES[0]

}




class Home extends Component {


	constructor(){

		super();

		this.state = initialState;
	}


 changeImage=(pos)=>{

this.setState({currentImgPath:CONSTANTS.MAIN_PAGE_HOME_ARRAY_IMAGES[pos]})

}


	render(){	

		return(


		<div className='home'> 

			<div className='grid'>	
				<div className='white-block'></div>
				<div className='animated'></div>
			</div>
			<div className='text-desc'> <p>{CONSTANTS.MAIN_PAGE_HOME_TEXT}</p></div>
			<div className='skipper_car'><Carusel changeImage={this.changeImage}/></div>
			
			{console.log(this.state.currentImgPath)}

			
			<div className='img-show' style={{backgroundImage: `url(${require(`${this.state.currentImgPath}`)})`}}                              />




	

		</div>

		);

	}

}
export default Home;