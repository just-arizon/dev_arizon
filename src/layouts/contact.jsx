import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { Terminal, Code, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
const Contact = () => {
  return (
    <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent to-black/20 w-12"></div>
            <h2 className="font-clash text-2xl font-bold">Contact</h2>
            <div className="h-px bg-gradient-to-r from-black/20 to-transparent flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Get In Touch</h3>
              <p className="text-gray-600">
                I'm currently available for freelance work and full-time positions. If you have a project that needs
                some creative coding, let's talk!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <a href="mailto:hello@example.com" className="hover:text-gray-600 transition-colors">
                    hello@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-gray-500" />
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-600 transition-colors"
                  >
                    github.com/username
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-gray-500" />
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-600 transition-colors"
                  >
                    linkedin.com/in/username
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 border border-black/10 rounded-lg p-6 shadow-sm">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full bg-white border border-black/20 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full bg-white border border-black/20 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-600">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full bg-white border border-black/20 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-white border border-black/20 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-gray-900 to-black text-white hover:from-black hover:to-gray-800">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>


  )
}

export default Contact