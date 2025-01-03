import React from "react";
import "../styles/profile.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function profile() {
  return (
    <div className="flex justify-center items-center flex-col lg:pt-3">
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
            <br />Passionate about creating experiences that are easy to use, accessible, and also what meets user's need. Ability to deliver quality results while collaborating in rapidly changing work environments and team compositions. Also, willing to learn more technologies to become a better developer than yesterday. So determined and result oriented.
            Here are some of the projects I've worked on
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default profile;
