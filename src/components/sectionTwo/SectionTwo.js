import React from 'react';
import './sectionTwo.css';
import One from "../../assets/pics5.png";
import PicTwo from "../../assets/pics6.png";
import PicThree from "../../assets/pics7.png";
import PicFour from "../../assets/pics8.png";







const section2 = () => {
  return (
    <div className='pics_container'>

      <div className='color_container'>
        

      </div>
      <div className='image_container'>
      <img src={PicTwo} alt='work images' className='workImages'/>
      <div className='infos'>
        <p>Service Package 1</p>
        <p>We sow Male and female
        wears with a sense and 
        dedication to craft</p>
        <h4>starting price of $200</h4>
       </div>
      </div>

      <div className='image_container'>
      <img src={PicThree} alt='work images' className='workImages' />

      <div className='infos'>

        <p>Service Package 2</p>
        <p>We sow Male and female
        wears with a sense and 
        dedication to craft</p>
        <h4>starting price of $200</h4>
        </div>

        
      </div>
      <div className='image_container'>
      <img src={PicFour} alt='work images' className='workImages'/>
      <div className='infos'>

        <p>Service Package 3</p>
        <p>We sow Male and female 
        wears with a sense 
        and dedication to craft</p>
        <h4>starting price of $200</h4>
        </div>

        
      </div>
      
      </div>
  )
}

export default section2