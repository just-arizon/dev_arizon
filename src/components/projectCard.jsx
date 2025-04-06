import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

function ProjectCard({ title, type, description, technologies, imageUrl, projectUrl }) {
  return (
    <Card className="bg-gradient-to-br from-white to-gray-50 border-black/10 overflow-hidden group shadow-sm hover:shadow-md transition-all">
      <div className="relative aspect-video bg-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={imageUrl || "/placeholder.svg?height=300&width=500"}
            alt={`${title} thumbnail`}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg">{title}</h3>
          <Badge variant="outline" className="border-black/20 text-xs bg-gradient-to-r from-gray-50 to-white">{type}</Badge>
        </div>

        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map(tech => (
            <Badge key={tech} variant="secondary" className="bg-gradient-to-r from-blue-50/50 to-blue-100/50 text-xs">{tech}</Badge>
          ))}
        </div>

        <div className="flex justify-between">
          <Button variant="ghost" size="sm" className="text-xs p-0 h-auto hover:bg-transparent hover:text-gray-600">
            View Details
          </Button>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="sr-only">Visit Project</span>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
