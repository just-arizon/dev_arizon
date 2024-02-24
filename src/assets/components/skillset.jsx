import React from 'react';
import { Icon } from "@iconify/react";
// import "../styles/skillset.css";

const skillset = () => {
  return (
    <div className='flex justify-center mt-12'>
      <div className="dash__profile" data-speed="fast">
            <ul className="flex gap-1 flex-wrap">
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
