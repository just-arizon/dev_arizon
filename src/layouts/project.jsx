import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import ProjectCard from "@/components/projectCard";
import IdleFarmerImg from "../assets/images/idlefarmer.png";
import DoraImg from "../assets/images/dora.png";
import ElneemaImg from "../assets/images/elneema.png";
import KreaImg from "../assets/images/krea.png";
import NabetoImg from "../assets/images/nabeto.png";
import MymindspaceImg from "../assets/images/mymindspace.png";

const projectData = [
  {
    title: "IdleFarmer",
    type: "Web",
    description: "Empowering farmers with a web-based idle farming simulator and giving them access to tractors, bulk inputs and farm support.",
    technologies: ["React", "TailwindCSS", "Vite"],
    imageUrl: IdleFarmerImg,
    projectUrl: "https://www.idlefarmer.africa/",
  },
  {
    title: "Use-Dora",
    type: "Web",
    description: "Crafting unique trips that blend adventure and culture, Use-Dora is a web platform that connects travelers with local guides.",
    technologies: ["React", "TailwindCSS", "Vite"],
    imageUrl: DoraImg,
    projectUrl: "https://your-portfolio.com",
  },
  {
    title: "El-Neema Care Initiative",
    type: "Web",
    description: "El-Neema is an NGO platform that takes care of children especially girls to eradicate period poverty and also educate them on how to take care of their mentral hygiene.",
    technologies: ["React", "TailwindCSS", "Vite"],
    imageUrl: ElneemaImg,
    projectUrl: "https://www.elneemacaresinitiative.org/",
  },
  {
    title: "My Mind Space",
    type: "Web",
    description: "My Mind Space is a web application designed to help users manage their mental health and well-being through journaling, mood tracking, and mindfulness exercises.",
    technologies: ["React", "TailwindCSS", "Vite"],
    imageUrl: MymindspaceImg,
    projectUrl: "https://my-mynd-space.vercel.app/",
  },
  {
    title: "Krea AI",
    type: "Web",
    description: "Clone built for practice",
    technologies: ["NextJS", "Typescript"],
    imageUrl: KreaImg,
    projectUrl: "https://krea-ai-clone-seven.vercel.app",
  },
  {
    title: "Nabeto Engineering Limited",
    type: "Web",
    description: "Enginering, Procurement and Construction service company.",
    technologies: ["React", "Tailwind", "Typescript"],
    imageUrl: NabetoImg,
    projectUrl: "https://nabetoengineering.com",
  },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Other", value: "other" },
];

const filterProjects = (type) =>
  type === "all"
    ? projectData
    : projectData.filter(
        (project) => project.type.toLowerCase() === type.toLowerCase()
      );

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-b border-black/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent to-black/20 dark:to-white w-12 " />
          <h2 className="font-clash text-2xl font-bold">Projects</h2>
          <div className="h-px bg-gradient-to-r from-black/20 to-transparent flex-grow" />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 mb-8 bg-transparent gap-2">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`
                  relative px-4 py-2 rounded-md text-white dark:text-white  dark:bg-[#1a1a1a]
                  before:absolute before:inset-0 before:rounded-md before:p-[2px] before:z-[-1]
                  before:bg-none
                  data-[state=active]:text-white 
                  data-[state=active]:border-b
                  data-[state=active]:bg-black text-black
                `}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterProjects(tab.value).map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
