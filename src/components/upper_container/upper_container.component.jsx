import React from 'react';
import './upper_container.styles.css';
import NavigationBar from './navigation_bar/navigation_bar.component';
import Logo from './logo/logo.component';



const UpperContainer=()=>{

    return(     
        <div className='upper_container'> 
            <Logo />
            <NavigationBar />
        </div>
    )
}

export default UpperContainer;