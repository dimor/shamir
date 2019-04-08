import React, { Component } from 'react';
import './App.css';
import MainNavigation from './components/MainNavigation.js';
import Bottom from './components/Bottom.js';
/*import MainPage from './components/MainPage/MainPage.js';*/


class App extends Component {
  render() {
    return (
      <div> 
      <MainNavigation/>
     {/* <MainPage />*/}
      <Bottom />
      </div>
    );
  }
}

export default App;
