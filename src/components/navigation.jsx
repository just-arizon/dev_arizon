// import React from "react";
// import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { FileDown } from "lucide-react";

// import { ModeToggle } from "@/components/mode-toggle";
import Logo from "../assets/images/pro.jpg";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
import { HashLink } from "react-router-hash-link";

function Navigation() {
  return (
    <>
      {/* Header */}
      <header className="flex border-b border-black/10 py-4 lg:px-20 px-5 fixed w-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md z-50">
        <div className="container mx-auto flex justify-between items-center">
          <HashLink
            smooth
            to="/"
            className="text-xl font-bold flex items-center gap-2"
          >
            <Terminal className="h-5 w-5" />
            <Avatar>
              <AvatarImage src={Logo} alt="@shadcn" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
          </HashLink>
          <nav className="">
            {/* {["about", "projects", "skills", "contact"].map((item) => (
              <HashLink
                key={item}
                smooth
                to={`/#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
              >
                {item}
              </HashLink>
            ))} */}
            <span className="relative -left-2 z-30 -top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24"
                className="absolute animate-pulse"
              >
                <g fill="none">
                  <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="#fff"
                    d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
                  />
                </g>
              </svg>
            </span>
            <div className="relative">
              <Button asChild className="bg-[#c084fcd9] px-8">
                <HashLink smooth to="/#">
                  {" "}
                  Résumé
                  {/* <FileDown className="h-5 w-5" />
                  <span className="sr-only">Resume</span> */}
                </HashLink>
              </Button>
            </div>
            <span className="relative -right-24 z-30 bottom-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24"
                className="absolute animate-pulse"
              >
                <g fill="none">
                  <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="#fff"
                    d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
                  />
                </g>
              </svg>
            </span>
          </nav>

          {/* <div className="flex gap-2">
            <ModeToggle className="" />

            <div className="lg:hidden md:hidden">
              <Drawer className="">
                {" "}
                <DrawerTrigger>
                  <Button variant="outline">
                    <AlignRight size={28} strokeWidth={2.5} />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="text-center">
                    <DrawerTitle className="text-xl font-bold">
                      Menu
                    </DrawerTitle>
                  </DrawerHeader>
                  <nav className="flex flex-col gap-4 p-4">
                    <DrawerClose>
                      <HashLink
                        smooth
                        to="/#about"
                        className="text-left hover:underline"
                      >
                        About
                      </HashLink>
                    </DrawerClose>
                    <DrawerClose>
                      <HashLink
                        smooth
                        to="/#projects"
                        className="text-base hover:underline"
                      >
                        Project
                      </HashLink>
                    </DrawerClose>
                    <DrawerClose>
                      <HashLink
                        smooth
                        to="/#skills"
                        className="text-base hover:underline"
                      >
                        Tools
                      </HashLink>
                    </DrawerClose>
                    <DrawerClose>
                      <HashLink
                        smooth
                        to="/#contact"
                        className="text-base hover:underline"
                      >
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
          </div> */}
        </div>
      </header>
    </>
  );
}

export default Navigation;
