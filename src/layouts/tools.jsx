import React from 'react'
import { Badge } from "@/components/ui/badge"
const Tools = () => {
  return (
    <section id="skills" className="py-20 border-b border-black/10">
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-2 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent to-black/20 w-12"></div>
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="h-px bg-gradient-to-r from-black/20 to-transparent flex-grow"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h3 className="text-xl font-bold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {[
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
            ].map((skill) => (
              <Badge key={skill} variant="outline" className="border-black/20 py-1.5">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>


  )
}

export default Tools