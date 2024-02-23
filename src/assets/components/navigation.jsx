import React from 'react'
import { Icon } from "@iconify/react";
// import {Button} from "@nextui-org/button";
import Logo from "../images/Group 4.svg"

function Navigation() {
  return (
    <div className='fixed bottom-0 bg-[#] w-full py-2 px-2 flex justify-between'>
      {/* Logo */}
      <div className="logo flex items-center">
        <img src={Logo} alt="logo" />
      </div>

      {/* Social Links */}
      <div className="social_links">
      <ul className='social--wrapper flex gap-3'>
             <li className='list__item'>
              <button className='bg-transparent'>
                <a href='https://github.com/just-arizon' className='nav-icon'>
                <Icon icon="line-md:github-loop" width="1.6em" height="1.6em" color='#252525'/>
                </a>
              </button>
              </li>
             <li className='list__item'>
              <button className='bg-transparent'>
                <a href='https://www.linkedin.com/in/arinze-calistus/' className='nav-icon'>
                             <Icon icon="line-md:linkedin" width="1.4em" height="1.6em" color='#252525'/>
                </a>
              </button>
              </li>
             <li className='list__item'>
              <button className='bg-transparent'>
                <a href='https://twitter.com/just_Arizon' className='nav-icon'>
                             <Icon icon="line-md:twitter" width="1.4em" height="1.6em" color='#252525'/>
                </a>
              </button>
              </li>
           </ul>
      </div>

      {/* Hamburger */}
      <div className="hamburger flex items-center">
      <Icon icon="solar:hamburger-menu-broken" className="hamburger__icon"
      width="1.6em" height="1.4em" color='#252525'/>
      </div>
    </div>
  )
}

export default Navigation