import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 lg:pt-40 lg:p-20 py-8 border-b border-black/10 ">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-gray-500 text-sm">&gt; initiating sequence...</p>
            <h1 className="font-clash text-4xl md:text-6xl font-bold leading-tight">
              Full Stack <br />
              Developer_
            </h1>
          </div>
          <p className="text-gray-600 max-w-md dark:text-gray-400">
            Building digital experiences with clean code and innovative
            solutions. Specialized in React, Next.js, and modern web
            technologies.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button className="bg-gradient-to-r from-gray-900 to-black text-white hover:from-black hover:to-gray-800">
              View Projects
            </Button>
            <Button
              variant="outline"
              className="border-black/20 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:text-slate-800"
            >
              Contact Me
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Link
              to="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              to="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              to="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

     {/* Terminal Card */}
<div className="flex justify-center">
 {/* Terminal Card with Conic Gradient Border */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex justify-center"
>
  <div className="dark:card-wrapper bg-slate-200 w-full max-w-3xl h-auto rounded-lg">
    <div className="card-inner ">
      
      <div className="flex items-center gap-2 mb-4 border-b border-gray-500/20 pb-2">
        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
        <span className="text-xs dark:text-gray-300 light:text-gray-500 ml-2">terminal</span>
      </div>

    
      <div className="font-mono text-sm space-y-2 dark:text-white">
        <p><span className="text-gray-500">$</span> Hello, World!</p>
        <p><span className="text-gray-500">$</span> I'm a developer passionate about creating elegant solutions.</p>
        <p><span className="text-gray-500">$</span> Let's build something amazing together.</p>
        <p className="flex items-center">
          <span className="text-gray-500">$</span>
          <span className="ml-1 animate-pulse">_</span>
        </p>
      </div>
    </div>
  </div>
</motion.div>
</div>

      </div>
    </section>
  );
};

export default Hero;
