import React from 'react';
import { Icon } from "@iconify/react";

const footer = () => {
  return (
    <div className='bg-[#252525] flex justify-center py-2'>
            <ul className='social--wrapper flex gap-3'>
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
  );
}

export default footer;
