import React from 'react';
import './letsChat.css';
import flowerImage from '../../assets/Rectangle 16.png';
import manImage from '../../assets/Rectangle 14.png';


const letsChat = () => {
  return (
    <div className='lets_chat_cont'>
      <div className='lets_chat-text'>
      Contact us at Terain-Fashion at<br/>
      West side california USA
      <button className='sectionTwo_btn'>Let us chat</button>
      </div>
      <div className='lets_chat_images'>
        <img src={flowerImage} alt='letschat imgs' className='lets_chat_image1'/>
        <img src={manImage} alt='letschat imgs' className='lets_chat_image2'/>
        </div>


      
      </div>
  )
}

export default letsChat