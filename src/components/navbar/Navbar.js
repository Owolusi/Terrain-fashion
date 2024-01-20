import React from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa'


const Menu=()=>(
  <>
   <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#wgpt3">Terrain-Fashion</a></p>

          <p><a href="#possibility">Services</a></p>
          <p><a href="#features">Contact</a></p>
          <p><a href="#blog">Search</a>{FaSearch}</p>
  
  </>

)


const Navbar = () => {

  const [toggleMenu, settoggleMenu]=useState(false)
  return (
    <div className='fashion__navbar'>
      <div className="fashion__navbar-links">
        <div className="fashion__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
        <div className="fashion__navbar-links_container">
         <Menu />
        </div>
      </div>
      <div className="fashion__navbar-menu">
        {toggleMenu
        ?<RiCloseLine color="black" size={27} onClick={()=>settoggleMenu(false)}/>
        :<RiMenu3Line color="#black" size={27} onClick={()=>settoggleMenu(true)}/>

      }
      {toggleMenu &&(
              <div className="fashion__navbar-menu_container scale-up-center">

                <div className="fashion__navbar-menu_container-links">
                  <Menu />
                  </div>
                </div>

      )}


      </div>
      </div>
  )
}

export default Navbar