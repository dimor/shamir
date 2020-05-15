import React,{ useState } from 'react';
import './home.page.styles.css';
import Lottie from 'react-lottie';
import animationData from './animations/data.json';
import * as CONSTANTS from './home.page.constants';
import Carusel from './carusel/carusel.component.jsx';



const HomePage =()=>{



    const [currentImgPath, changeImage] = useState(CONSTANTS.MAIN_PAGE_HOME_ARRAY_IMAGES[0]);


    const changeCarusel=(pos)=>{

        changeImage(CONSTANTS.MAIN_PAGE_HOME_ARRAY_IMAGES[pos])
        
        }

    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData
      };


  

    return(
            <div className='home-main-container'> 
                        <div className='home-inner-container'> 
                            <div className='home-main-div-grid'>	
                                <div className='home-white-block-animated'></div>
                                 <div className='home-logo-animated'>
                                        <Lottie options={defaultOptions} />
                                </div>
                            </div>

                            <div className='home-text-div'>
                                <p>{CONSTANTS.MAIN_PAGE_HOME_TEXT}</p>
                                <div className='home-carusel-div'><Carusel changeImage={changeCarusel}/></div>
                            </div>
        
                            <div className='home-image-div' style={{backgroundImage: `url(${require(`${currentImgPath}`)})`}}></div>  

                        </div>
    
                        <div className="shamir"><Lottie  options={defaultOptions} /></div>
            </div>
    
    );
}
export default HomePage;