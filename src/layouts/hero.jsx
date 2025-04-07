import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { Terminal, Code, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
const hero = () => {
  return (
    <section className="pt-32 lg:pt-40 lg:py-20 py-8 border-b border-black/10 bg-gradient-to-br from-white via-slate-50 to-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-gray-500 text-sm">&gt; initiating sequence...</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Full Stack <br />
                Developer_
              </h1>
            </div>
            <p className="text-gray-600 max-w-md">
              Building digital experiences with clean code and innovative solutions. Specialized in React, Next.js, and
              modern web technologies.
            </p>
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-gray-900 to-black text-white hover:from-black hover:to-gray-800">
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-black/20 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-white border border-black/10 rounded-lg p-6 relative shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-black/10 pb-2">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <span className="text-xs text-gray-600 ml-2">terminal</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <p>
                <span className="text-gray-500">$</span> Hello, World!
              </p>
              <p>
                <span className="text-gray-500">$</span> I'm a developer passionate about creating elegant solutions.
              </p>
              <p>
                <span className="text-gray-500">$</span> Let's build something amazing together.
              </p>
              <p className="flex items-center">
                <span className="text-gray-500">$</span> <span className="ml-1 animate-pulse">_</span>
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-black/10 rounded-lg bg-gradient-to-br from-white to-gray-50 grid place-items-center shadow-sm">
              <Code className="w-8 h-8" />
            </div>
          </div>
        </div>
      </section>

  )
}

export default hero