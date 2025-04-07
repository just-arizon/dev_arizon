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

function Navigation() {
  return (
    <>
      {/* Header */}
      <header className="border-b border-black/10 p-4 fixed w-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            <Avatar>
              <AvatarImage src={Logo} alt="@shadcn" />
              <AvatarFallback>AR</AvatarFallback>
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


          <div className="lg:hidden md:hidden">
            <Drawer className="">
              {" "}
            
              <DrawerTrigger>
                <Button variant="outline">
                <AlignRight size={28} strokeWidth={2.5} />
                </Button>
              </DrawerTrigger>
              <DrawerContent >
                <DrawerHeader className="text-left">
                  <DrawerTitle className="text-xl font-bold">Menu</DrawerTitle>
                </DrawerHeader>
                <nav className="flex flex-col gap-4 p-4">
                  <DrawerClose asChild>
                    <Link href="/" className="text-xl hover:underline">
                      About
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <Link href="/project" className="text-xl hover:underline">
                      Project
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <Link href="/tools" className="text-xl hover:underline">
                      Tools
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <Link href="/contact" className="text-xl hover:underline">
                      Contact
                    </Link>
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
      </header>
    </>
  );
}

export default Navigation;
