import React from 'react'
import { Icon } from "@iconify/react";
// import {Button} from "@nextui-org/button";
import Logo from "../images/Group 4.svg"
import { HashLink as Link } from 'react-router-hash-link';



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
             <Link to="/#home" className='list__item' smooth>
              <button className='bg-transparent'>
                <div>Home</div>
              </button>
              </Link>
             <Link to="/#skillset" className='list__item' smooth>
                  <button className='bg-transparent'>
                  <div>Skillset</div>
                  </button>
              </Link>
             <Link to="/#experience" className='list__item' smooth>
              <button className='bg-transparent'>
              <div>Experience</div>
              </button>
              </Link>
             <Link to="/#project" className='list__item' smooth>
              <button className='bg-transparent'>
              <div>Project</div>
              </button>
              </Link>
           </ul>
      </div>

   
    </div>
  )
}

export default Navigation