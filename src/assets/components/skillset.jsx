import React from 'react';
import { Icon } from "@iconify/react";
// import "../styles/skillset.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const skillset = () => {
  return (
    <div className='flex justify-center mt-12'>
      <div className="dash__profile" data-speed="" data-aos="">
         <div className='pt-3 px-3'>
         <span className=" text-[#00d8c9]">Skillset:</span>
         </div>
            <ul className="flex gap-1 flex-wrap pb-3">
              <li className="iconify toolkits">
                <Icon icon="ic:outline-javascript" />
              </li>
              <li className="iconify toolkits">
                <Icon
                  icon="devicon:tailwindcss"
                  color="#ddd"
                  width="25"
                  height="25"
                />
              </li>
              <li className="iconify toolkits">
                <Icon
                  icon="logos:firebase"
                  color="#ddd"
                  width="25"
                  height="25"
                />
              </li>
              <li className="iconify toolkits">
                <Icon icon="logos:react" color="#ddd" width="25" height="25" />
              </li>
              <li className="iconify toolkits">
                <Icon
                  icon="tabler:brand-typescript"
                  color="#ddd"
                  width="25"
                  height="25"
                />
              </li>
              <li className="iconify toolkits">
                <Icon
                  icon="logos:nextjs"
                  width="25"
                  height="25"
                  className="next"
                />
              </li>
            
            </ul>
          </div>
    </div>
  );
}

export default skillset;
