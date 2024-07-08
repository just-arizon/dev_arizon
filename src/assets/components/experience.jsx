import React from "react";
import "../styles/experience.css";

const experience = ({ experiences }) => {
  const renderedList = experiences.map((experience) => {
    return (
        <div
          className="dash__profile rounded p-5 w-11/12"
          data-speed=""
          data-aos=""
          key={experience.id}
        >
          <span className=" text-[#00d8c9] text-xl">{experience.title}</span>
          <div>
            <span className="text-[#00d8c9] font-normal text-sm">{experience.date}</span>
          </div>
          <p className="py-5">{experience.details}</p>
        </div>
 
    );
  });
  return (
    <div className="mt-12" id="experience">
      <div className="flex justify-center">
        <div className="text-[#00d8c9] text-3xl font-extrabold ">
          Experience
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 flex flex-wrap mt-5 lg:px-12 p-3">{renderedList}</div>
    </div>
  );
};

export default experience;
