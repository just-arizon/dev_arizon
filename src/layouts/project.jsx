import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import ProjectCard from "@/components/projectCard";

const projectData = [
  {
    title: "Dev Portfolio",
    type: "Web",
    description: "A personal developer portfolio built with React and TailwindCSS.",
    technologies: ["React", "TailwindCSS", "Vite"],
    imageUrl: "/images/portfolio.png",
    projectUrl: "https://your-portfolio.com",
  },
  {
    title: "E-Commerce App",
    type: "Mobile",
    description: "Cross-platform shopping app built with React Native and Firebase.",
    technologies: ["React Native", "Firebase"],
    imageUrl: "/images/ecommerce.png",
    projectUrl: "https://ecommerce-app.com",
  },
  {
    title: "Task Tracker",
    type: "Other",
    description: "A simple task tracking app with local storage support.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/tasks.png",
    projectUrl: "https://task-tracker.dev",
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
