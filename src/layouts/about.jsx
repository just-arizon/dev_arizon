import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { Terminal, Code, } from "lucide-react"
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  
const About = () => {
  return (
    <section id="about" className="py-20 border-b border-black/10">
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-2 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent to-black/20 w-12"></div>
        <h2 className="font-clash text-2xl font-bold">About</h2>
        <div className="h-px bg-gradient-to-r from-black/20 to-transparent flex-grow"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <p className="text-gray-600">
            I'm a full-stack developer with a passion for building modern web applications. With a background in
            computer science and years of industry experience, I specialize in creating responsive, user-friendly
            interfaces and robust backend systems.
          </p>
          <p className="text-gray-600">
            My approach combines technical expertise with creative problem-solving, allowing me to deliver solutions
            that are both innovative and practical.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <h3 className="text-sm text-gray-500 mb-2">LOCATION</h3>
              <p>San Francisco, CA</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 mb-2">EXPERIENCE</h3>
              <p>5+ Years</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 mb-2">AVAILABILITY</h3>
              <p>Freelance / Full-time</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 mb-2">REMOTE</h3>
              <p>Available</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-white to-blue-50/30 border-black/10 shadow-sm">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-white rounded-lg mb-4 grid place-items-center border border-black/5">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Frontend</h3>
              <p className="text-gray-600 text-sm">
                Creating responsive and intuitive user interfaces with modern frameworks.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-white to-purple-50/30 border-black/10 shadow-sm">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-white rounded-lg mb-4 grid place-items-center border border-black/5">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Backend</h3>
              <p className="text-gray-600 text-sm">Building scalable APIs and server-side applications.</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-white to-teal-50/30 border-black/10 shadow-sm">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-50 to-white rounded-lg mb-4 grid place-items-center border border-black/5">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L7 11L17 11L12 16Z" fill="currentColor" />
                  <path d="M12 8L17 13L7 13L12 8Z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">UI/UX</h3>
              <p className="text-gray-600 text-sm">
                Designing clean, intuitive interfaces focused on user experience.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-white to-rose-50/30 border-black/10 shadow-sm">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-50 to-white rounded-lg mb-4 grid place-items-center border border-black/5">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                  <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                  <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                  <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Architecture</h3>
              <p className="text-gray-600 text-sm">Designing scalable and maintainable system architectures.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>


  )
}

export default About