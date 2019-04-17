import React,{Component} from 'react';
import AnimatedTitle from './AnimatedTitle.js';
import './Home.css';
import * as CONSTANTS from './../../../constants';
import Carusel from './Carusel.js';
import logo from './images/shamir.png';




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


		<div className='home-main-container'> 


					<div className='home-inner-container'> 

						<div className='home-main-div-grid'>	

							<div className='home-white-block-animated'></div>
							<div className='home-logo-animated'><img src={logo} /></div>

						</div>



					<div className='home-text-div'>

						<p>{CONSTANTS.MAIN_PAGE_HOME_TEXT}</p>

						<div className='home-carusel-div'><Carusel changeImage={this.changeImage}/></div>

					</div>


					<div className='home-image-div' style={{backgroundImage: `url(${require(`${this.state.currentImgPath}`)})`}}></div>      	

					</div>

		</div>

	
	
		);

	}

}
export default Home;