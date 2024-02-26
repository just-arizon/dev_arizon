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
      <ul className='social--wrapper flex gap-3 pb-2 pt-3'>
             <li className='list__item'>
              <button className='bg-transparent'>
                <a href='https://github.com/just-arizon' className='nav-icon'>
                <Icon icon="line-md:github-loop" width="1.6em" height="1.6em" color='#fff'/>
                </a>
              </button>
              </li>
             <li className='list__item'>
              <button className='bg-transparent'>
                <a href='https://www.linkedin.com/in/arinze-calistus/' className='nav-icon'>
                             <Icon icon="line-md:linkedin" width="1.4em" height="1.6em" color='#fff'/>
                </a>
              </button>
              </li>
             <li className='list__item'>
              <button className='bg-transparent'>
                <a href='https://twitter.com/just_Arizon' className='nav-icon'>
                             <Icon icon="line-md:twitter" width="1.4em" height="1.6em" color='#fff'/>
                </a>
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