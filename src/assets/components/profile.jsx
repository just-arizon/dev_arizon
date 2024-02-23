import React from "react";
import { Icon } from "@iconify/react";
import "../styles/profile.css";

function profile() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="dashboard__profile--img">
        <div className="indicator">
          <div className="arrow"></div>
        </div>
        <div
          className="image__circle"
          data-aos="flip-right"
          data-aos-delay="2000"
        ></div>
        <div className="svg"></div>
      </div>
      <div
        className="dash__profile first-step p-5 rounded-xl my-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="dash__profile--text">
          <p>
            <span className=" text-[#00d8c9]">Hello</span>, I’m Arinze
            <br />A Front-End Developer with the following stacks
          </p>
          <div className="scroller" data-speed="fast">
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
              {/* <li className="iconify toolkits">
    <Icon icon="cib:react" />
    </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
