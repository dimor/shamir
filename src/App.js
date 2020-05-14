import React from 'react';
import './App.css';
import UpperContainer from './components/upper_container/upper_container.component';
import PageContainer from './components/page_container/page_container.component';
import BottomContainer from './components/bottom_container/bottom_container.component';
import {BrowserRouter as Router} from "react-router-dom";


const App =()=>{

    return (

        <div className='main_page_container'>
          <Router>
            <UpperContainer />
            <PageContainer />
            <BottomContainer />
          </Router>
        </div>
    );
  }

export default App;
