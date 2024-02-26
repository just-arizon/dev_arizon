import React from 'react'
import { Icon } from "@iconify/react";
// import {Button} from "@nextui-org/button";
import Logo from "../images/Group 4.svg"

function Navigation() {
  return (
    <div className='fixed -top-2  w-full px-2 flex justify-center z-50 '>
      {/* Logo */}
      {/* <div className="logo flex items-center">
        <img src={Logo} alt="logo" />
      </div> */}

      {/* Social Links */}
      <div className="social_links rounded-bl-lg rounded-br-lg bg-[#252525] lg:w-1/2 w-full border-0 border-[#00d8c9] flex justify-center items-center">
      <ul className='social--wrapper flex lg:gap-10 gap-5 md:gap-8 pb-2 pt-3'>
             <li className='list__item'>
              <button className='bg-transparent'>
                <div>Home</div>
              </button>
              </li>
             <li className='list__item'>
              <button className='bg-transparent'>
              <div>Skillset</div>
              </button>
              </li>
             <li className='list__item'>
              <button className='bg-transparent'>
              <div>Experience</div>
              </button>
              </li>
             <li className='list__item'>
              <button className='bg-transparent'>
              <div>Project</div>
              </button>
              </li>
           </ul>
      </div>

      {/* Hamburger */}
      {/* <div className="hamburger flex items-center">
      <Icon icon="solar:hamburger-menu-broken" className="hamburger__icon"
      width="1.6em" height="1.4em" color='#fff'/>
      </div> */}
    </div>
  )
}

export default Navigation