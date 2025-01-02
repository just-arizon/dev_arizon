import React from "react";
import { Link } from "@nextui-org/link";
import Navigation from "./navigation";
import Footer from "./footer";
import { Card } from "@nextui-org/card";

const Project = ({ projects }) => {
  const renderedList = projects.map((project) => (
    <Card
      className="border-2 border-[#00d8c9] rounded-lg p-5"
      key={project.id}
    >
      <h3 className="text-[#00d8c9] text-xl font-semibold">{project.title}</h3>

      <p className="py-4 text-gray-300">{project.details}</p>

      <div className="flex flex-wrap gap-3">
        {project.languages.map((language, index) => (
          <span
            key={index}
            className="bg-[#24242456] border border-gray-600 py-1 px-4 rounded-full text-xs font-light text-white"
          >
            {language}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <Link
          href={project.preview}
          className="text-[#00d8c9] py-2 px-4 rounded-md"
          aria-label={`Preview ${project.title}`}
        >
          Preview
        </Link>
        <Link
          href={project.code}
          className="text-[#00d8c9] py-2 px-4 rounded-md"
          aria-label={`View code for ${project.title}`}
        >
          Code
        </Link>
      </div>
    </Card>
  ));

  return (
    <>
    <div className="pt-20 bg-[#252525] min-h-screen">
      <Navigation />
      <div className="grid justify-center px-4">
        <h2 className="text-[#00d8c9] text-3xl font-extrabold py-4 text-center">
          Projects
        </h2>
        <blockquote className="text-center text-gray-400 italic px-4">
          "The goal is not to be the best of the best or to be perfect, but to
          get 1% better every day."
        </blockquote>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 px-6 lg:px-12">
        {renderedList}
      </div>

    </div>
      <Footer />
</>
  );
};

export default Project;