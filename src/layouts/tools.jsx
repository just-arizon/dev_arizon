import React from "react"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"

const Tools = () => {
  const skills = {
    All: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "REST API",
      "Git",
      "Docker",
      "AWS",
      "Firebase",
      "Redux",
      "Tailwind CSS",
      "Jest",
      "CI/CD",
      "Webpack",
      "Figma",
      "Responsive Design",
    ],
    Frontend: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Responsive Design"],
    Backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST API"],
    DevOps: ["Git", "Docker", "AWS", "CI/CD"],
    Tools: ["Webpack", "Figma", "Jest"],
  }

  return (
    <section id="skills" className="py-20 border-b border-black/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent to-black/20 w-12 dark:to-white" />
          <h2 className="font-clash text-2xl font-bold">Skills</h2>
          <div className="h-px bg-gradient-to-r from-black/20 to-transparent flex-grow" />
        </div>

        <div className="grid md:grid-cols-1 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">Tools & Technologies</h3>

            <Tabs defaultValue="All" className="w-full">
              <TabsList className="flex flex-wrap gap-2 lg:mb-6 mb-10 bg-transparent justify-start">
                {Object.keys(skills).map((tab) => (
                  <TabsTrigger key={tab} value={tab} className="
                   relative px-4 py-2 rounded-md text-white dark:text-white  dark:bg-[#1a1a1a]
                  before:absolute before:inset-0 before:rounded-md before:p-[2px] before:z-[-1]
                  before:bg-none
                  data-[state=active]:text-white 
                  data-[state=active]:border-b
                  data-[state=active]:bg-black text-black
                  ">
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(skills).map(([category, tools]) => (
                <TabsContent key={category} value={category}>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-black/20 py-1.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools
