import React ,{useState ,useEffect} from 'react';
import './page_container.styles.css';
import HomePage from './pages/home.page/home.page.component';
import AboutPage from './pages/about.page/about.page.component';
import ProductsPage from './pages/products.page/products.page.component';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
  



const PageContainer=()=>{

 
   
    return(

        <div className='page_container'>
        
            <Switch>
                <Route exact path='/shamir'><HomePage /></Route>
                <Route exact path='/about'><AboutPage /></Route>
                <Route exact path='/products'><ProductsPage /></Route>
            </Switch>
 
        </div>
    )
}

export default PageContainer;