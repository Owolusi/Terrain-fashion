import React from 'react'
import './Footer.css';
import sectionmg1 from'../../assets/pics8.png';
import sectionmg2 from'../../assets/2nd.png';
import sectionmg3 from'../../assets/3rd.png';
import sectionmg4 from'../../assets/pics8.png';
import {FaSearch} from 'react-icons/fa'
import { FaFacebook} from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaTiktok} from 'react-icons/fa';








const Footer = () => {
  const facebook = 'https://www.facebook.com/'; 
  const twitter = 'https://www.twitter.com/'; 
  const tiktok= 'https://www.tiktok.com/'; 
  const instagram = 'https://www.instagram.com/'; 

  return (
    <div className='footer_cont'>

          <section className='footer_section'>
            <h3 className='section_header'>FOLLOW T-FASHION</h3>
            <div className="icon_section">
            <a href={facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} style={{ color: 'black' }} />
            </a>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} style={{ color: 'black' }} />
            </a>
            <a href={tiktok} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} style={{ color: 'black' }} />
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaTiktok size={30} style={{ color: 'black' }} />
            </a>
           
            </div>
            <div className="footer_image_container">
              <img className='section_image' src={sectionmg1} alt='fashion_images' width='20%'/>
              <img className='section_image' src={sectionmg2} alt='fashion_images' width='20%'/>
              <img className='section_image' src={sectionmg3} alt='fashion_images' width='20%'/>
              <img className='section_image' src={sectionmg4} alt='fashion_images' width='20%'/>

            </div>
            <div className='footer_links'>
          <p>
          <a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#wgpt3">Terrain-Fashion</a></p>
          <p><a href="#possibility">Services</a></p>
          <p><a href="#features">Contact</a></p>
          <p><a href="#blog">Search</a>{FaSearch}</p>
  
            </div>


            </section>


      
      
      </div>
  )
}

export default Footer