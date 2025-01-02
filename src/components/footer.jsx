import React from 'react';
import { Icon } from "@iconify/react";

const footer = () => {
  return (
    <div className='bg-[#252525] flex justify-center flex-col py-2'>
            <div>
              <ul className='social--wrapper flex gap-3 justify-center'>
               <li className='list__item'>
                <button className='bg-transparent'>
                  <a href='https://github.com/just-arizon' className='nav-icon'>
                  <Icon icon="line-md:github-loop" width="1.2em" height="1.4em" color='#fff'/>
                  </a>
                </button>
                </li>
               <li className='list__item'>
                <button className='bg-transparent'>
                  <a href='https://www.linkedin.com/in/arinze-calistus/' className='nav-icon'>
                               <Icon icon="line-md:linkedin" width="1.2em" height="1.4em" color='#fff'/>
                  </a>
                </button>
                </li>
               <li className='list__item'>
                <button className='bg-transparent'>
                  <a href='https://twitter.com/just_Arizon' className='nav-icon'>
                               <Icon icon="line-md:twitter" width="1.2em" height="1.4em" color='#fff'/>
                  </a>
                </button>
                </li>
                         </ul>
                         <div><p className='text-center'>Made by Arizon</p></div>
            </div>

    </div>
  );
}

export default footer;
