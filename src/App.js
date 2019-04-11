import React, { Component } from 'react';
import './App.css';
import MainNavigation from './components/MainNavigation.js';
import Bottom from './components/Bottom.js';
import MainPage from './components/MainPage/MainPage.js';


class App extends Component {
  render() {
    return (
      <div> 
      <MainNavigation className='a' />
      <MainPage className='b'/>
      <Bottom className='c' />
      </div>
    );
  }
}

export default App;
