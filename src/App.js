import React, { Component } from 'react';
import './App.css';
import MainNavigation from './components/MainNavigation.js';
import Bottom from './components/Bottom.js';
import MainPage from './components/MainPage/MainPage.js';
import * as CONSTANTS from './constants';


const initialState={

	route:CONSTANTS.ROUTE_HOME

}



class App extends Component {

	constructor(){
		super();

		this.state= initialState;


	}


	 changeRoute=(distanation)=>{

		this.setState({route:distanation});
	}



  render() {




    return (
      <div className='app-container'> 
        <MainNavigation className='a' changeRoute={this.changeRoute} />
        <MainPage className='b' route={this.state.route}   />
        <Bottom className='c' />
      </div>
    );
  }
}

export default App;
