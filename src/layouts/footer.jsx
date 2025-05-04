import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { Terminal, Code, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "../assets/images/pro.jpg";
const Footer = () => {
  return (
    <footer className="py-8 border-t border-black/10 lg:px-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Terminal className="h-5 w-5" />
              <Avatar>
                            <AvatarImage src={Logo} alt="@shadcn" />
                            <AvatarFallback>AZ</AvatarFallback>
                          </Avatar>
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={"mailto:calistusarinzechinweuba@gmail.com"} className="text-gray-600 hover:text-black transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>

  )
}

export default Footer