import React from "react";
import { Link } from "react-router-dom";
import {
  Terminal,
  Code,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "../assets/images/pro.jpg";

function Navigation() {
  return (
    <>
      {/* Header */}
      <header className="border-b border-black/10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            <Avatar>
              <AvatarImage src={Logo} alt="@shadcn" />
              <AvatarFallback>AZ</AvatarFallback>
            </Avatar>
          </Link>
          <nav className="hidden md:flex gap-6">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button variant="outline" className="border-black/20 text-xs">
            Connect_
          </Button>
        </div>
      </header>
    </>
  );
}

export default Navigation;
