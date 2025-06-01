import React from "react";
import { Link } from "react-router-dom";
import {
  Terminal,
  AlignRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import Logo from "../assets/images/pro.jpg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { HashLink } from 'react-router-hash-link';


function Navigation() {
  return (
    <>
      {/* Header */}
      <header className="flex border-b border-black/10 py-4 lg:px-20 px-5 fixed w-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md z-50">
        <div className="container mx-auto flex justify-between items-center">
          <HashLink smooth to="/" className="text-xl font-bold flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            <Avatar>
              <AvatarImage src={Logo} alt="@shadcn" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
          </HashLink>
          <nav className="hidden md:flex gap-6">
            {["about", "projects", "skills", "contact"].map((item) => (
              <HashLink
                key={item}
                smooth to={`/#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
              >
                {item}
              </HashLink>
            ))}
          </nav>

          <div className="flex gap-2">
        <ModeToggle className="" />     

          <div className="lg:hidden md:hidden">
            <Drawer className="">
              {" "}
            
              <DrawerTrigger>
                <Button variant="outline">
                <AlignRight size={28} strokeWidth={2.5} />
                </Button>
              </DrawerTrigger>
              <DrawerContent >
                <DrawerHeader className="text-center">
                  <DrawerTitle className="text-xl font-bold">Menu</DrawerTitle>
                </DrawerHeader>
                <nav className="flex flex-col gap-4 p-4">
                  <DrawerClose>
                      <HashLink smooth to="/#about" className="text-left hover:underline">
                        About
                      </HashLink>
                  </DrawerClose>
                  <DrawerClose>
                    <HashLink smooth to="/#projects" className="text-base hover:underline">
                      Project
                    </HashLink>
                  </DrawerClose>
                  <DrawerClose>
                    <HashLink smooth to="/#skills" className="text-base hover:underline">
                      Tools
                    </HashLink>
                  </DrawerClose>
                  <DrawerClose>
                    <HashLink smooth to="/#contact" className="text-base hover:underline">
                      Contact
                    </HashLink>
                  </DrawerClose>
                </nav>
                <DrawerFooter className="mt-auto">
                  <DrawerClose>
                    <Button variant="outline" className="w-full">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        </div>
        
      </header>
    </>
  );
}

export default Navigation;
