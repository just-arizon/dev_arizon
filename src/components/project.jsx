import React from "react";
import { Link } from "react-router-dom";
const project = ({ projects }) => {
  const renderedList = projects.map((project) => {
    return (
      <div
        className="dash__profile rounded p-5 w-11/12"
        data-speed=""
        data-aos=""
        key={project.id}
      >
        <span className=" text-[#00d8c9] text-xl">{project.title}</span>
        <div>
          <span className=" flex gap-3 mt-3">
            {project.languages.map((language, index) => (
              <span
                key={index}
                className="bg-transparent border-2 border-[#00d8c9] py-1 px-4 rounded-lg font-thin text-xs"
              >
                {language}
              </span>
            ))}
          </span>
        </div>
        <p className="py-5">{project.details}</p>
        <div className="flex gap-3">
          <Link
            to={project.preview}
            className="bg-[#00d8c9] py-2 px-5 rounded-md"
          >
            Preview
          </Link>
          <Link
            to={project.code}
            className="bg-[#00d8c9] py-2 px-5 rounded-md"
          >
            Code
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className="mt-12" id="experience">
      <div className="flex justify-center">
        <div className="text-[#00d8c9] text-3xl font-extrabold ">Projects</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 flex flex-wrap mt-5 lg:px-12 p-3">
        {renderedList}
      </div>
    </div>
  );
};

export default project;
