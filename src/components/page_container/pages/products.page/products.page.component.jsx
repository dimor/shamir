import React from 'react';
import './products.page.styles.css';
import * as CONSTANTS from './products.page.constants';
import Lottie from 'react-lottie';
import animationData from './animations/data.json';
import Box from './box.component';

const ProductsPage =()=>{


    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData
      };

  

return(


	<div className='projects-main-container'>


		<div className='projects-inner-container'>


			<div className='main-upper'> 

				<div className="upper-div">

					<div className='upper-div-animation'> </div>

						<div className='inner-upper-div'>

							<Box type='upper' box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX1} />

							<Box type='upper' box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX2} />

							<Box type='upper' box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX3} />

							<Box type='upper' box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX4} />

						</div>

				</div>

			</div>

            <div className='main-bottom'>


                <div className="bottom-div">

                
                    <div className='bottom-div-animation'> </div>

                    <div className='inner-bottom-div'>

                        <Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX5} />

                        <Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX6} />

                        <Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX7} />

                        <Box box={CONSTANTS.MAIN_PAGE_PROJECTS_BOX8} />

                    </div>

                </div>

            </div> 	
	    </div>


	<div className='animated-title-projects'> <Lottie  options={defaultOptions} /> </div>




	</div>


);



}

export default ProductsPage;