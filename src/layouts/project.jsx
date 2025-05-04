import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/projectCard"

const projectData = [
  {
    title: "Dev Portfolio",
    type: "Web",
    description: "A personal developer portfolio built with React and TailwindCSS.",
    technologies: ["React", "TailwindCSS", "Vite"],
    imageUrl: "/images/portfolio.png",
    projectUrl: "https://your-portfolio.com"
  },
  {
    title: "E-Commerce App",
    type: "Mobile",
    description: "Cross-platform shopping app built with React Native and Firebase.",
    technologies: ["React Native", "Firebase"],
    imageUrl: "/images/ecommerce.png",
    projectUrl: "https://ecommerce-app.com"
  },
  {
    title: "Task Tracker",
    type: "Other",
    description: "A simple task tracking app with local storage support.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/tasks.png",
    projectUrl: "https://task-tracker.dev"
  },
  // Add more projects here as needed
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-b border-black/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent to-black/20 w-12"></div>
          <h2 className="font-clash text-2xl font-bold">Projects</h2>
          <div className="h-px bg-gradient-to-r from-black/20 to-transparent flex-grow"></div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 mb-8 bg-transparent">
            <TabsTrigger value="all" className="data-[state=active]:bg-black data-[state=active]:text-white">
              All
            </TabsTrigger>
            <TabsTrigger value="web" className="data-[state=active]:bg-black data-[state=active]:text-white">
              Web
            </TabsTrigger>
            <TabsTrigger value="mobile" className="data-[state=active]:bg-black data-[state=active]:text-white">
              Mobile
            </TabsTrigger>
            <TabsTrigger value="other" className="data-[state=active]:bg-black data-[state=active]:text-white">
              Other
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData
                .filter(project => project.type === "Web")
                .map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData
                .filter(project => project.type === "Mobile")
                .map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="other" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData
                .filter(project => project.type === "Other")
                .map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
