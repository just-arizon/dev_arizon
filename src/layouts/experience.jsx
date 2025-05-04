import React from 'react'
import { Terminal, Code, } from "lucide-react"
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import Carousel from '../components/carousel'
  
const Experience = () => {
    
  return (
    <section id="experience" className="py-20 border-b border-black/10 ">
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-2 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent to-black/20 w-12"></div>
        <h2 className="font-clash text-2xl font-bold">Experience</h2>
        <div className="h-px bg-gradient-to-r from-black/20 to-transparent flex-grow"></div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 gap-10">
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


        <div className="h-auto flex flex-col lg:justify-start md:justify-start justify-center items-center">
          <Carousel />
        </div>

        
      </div>
    </div>
  </section>


  )
}

export default Experience