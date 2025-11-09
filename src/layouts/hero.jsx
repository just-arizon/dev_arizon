import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, FileDown, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const [startRoles, setStartRoles] = useState(false);

  return (
    <section className="pt-32 lg:pt-40 lg:p-20 py-8 border-b border-black/10 ">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-gray-500 text-sm">
              &gt;{" "}
              <ReactTyped
                strings={["initiating sequence..."]}
                typeSpeed={40}
                showCursor={true}
                cursorChar="_"
                onComplete={() => setStartRoles(true)}
              />
            </p>
            <h1 className="font-clash text-4xl md:text-6xl font-bold leading-tight">
              {startRoles && (
                <ReactTyped
                  strings={[
                    "Full Stack",
                    // "React & Next.js Specialist_",
                    // "Creative Problem Solver_",
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  showCursor={true}
                  cursorChar="_"
                  // loop
                />
              )}
            </h1>
            <h1 className="font-clash text-4xl md:text-6xl font-bold leading-tight">
              {startRoles && (
                <ReactTyped
                  strings={["Developer", "Engineer", "web3", "Tech Tutor"]}
                  typeSpeed={60}
                  backSpeed={40}
                  showCursor={true}
                  cursorChar="_"
                  loop
                />
              )}
            </h1>
          </div>
          <p className="text-gray-600 max-w-md dark:text-gray-400">
            Building digital experiences with clean code and innovative
            solutions. Specialized in React, Next.js, and modern web
            technologies.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button
              asChild
              className="bg-gradient-to-r from-gray-900 to-black text-white hover:from-black hover:to-gray-800"
            >
              <HashLink smooth to="/#projects">
                {" "}
                View Projects
              </HashLink>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-black/20 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:text-slate-800"
            >
              <HashLink smooth to="/#contact">
                Contact Me
              </HashLink>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Link
              to="https://github.com/just-arizon"
              className="text-gray-600 hover:text-[#c084fcd9] transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              to="https://www.linkedin.com/in/arinze-calistus/"
              className="text-gray-600 hover:text-[#c084fcd9] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              to="https://x.com/just_Arizon"
              className="text-gray-600 hover:text-[#c084fcd9] transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              to="https://www.youtube.com/@dev_arizon"
              className="text-gray-600 hover:text-[#c084fcd9] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-youtube-icon lucide-youtube"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              to="#"
              className="text-gray-600 hover:text-[#c084fcd9] transition-colors"
            >
              <FileDown className="h-5 w-5" />
              <span className="sr-only">Resume</span>
            </Link>
          </div>
        </div>

        {/* Terminal Card */}
        <div className="flex justify-center mt-8">
          {/* Terminal Card with Conic Gradient Border */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center relative"
          >
            <span className="relative left-5 -top-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 24 24"
                className="absolute"
              >
                <g fill="none">
                  <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="#c084fcd9"
                    d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
                  />
                </g>
              </svg>
            </span>
            {/* Animated Stars */}
            <div className="z-50 absolute inset-0 pointer-events-none">
              {/* Star 1 - Top Left */}
              <motion.div
                className="absolute top-20 lg:left-0 left-12"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16"><path fill="#8ef105" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694L.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/></svg>
                <span className="bg-[#8ef105] rounded relative -left-10 -top-2 px-2 py- text-black">hello</span>
              </motion.div>

              {/* Star 2 - Top Right */}
              <motion.div
                className="absolute -top-8 lg:-right-8 right-12"
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16.807 2.36a4 4 0 0 0 2.276 2.411l.217.081 2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062 2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216z"
                    fill="#c084fcd9"
                  />
                </svg>
              </motion.div>

              {/* Star 3 - Bottom Left */}
              <motion.div
                className="absolute -bottom-8 lg:-left-8 left-12"
                animate={{ y: [-15, 15, -15] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16.807 2.36a4 4 0 0 0 2.276 2.411l.217.081 2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062 2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216z"
                    fill="#c084fcd9"
                  />
                </svg>
              </motion.div>

              {/* Star 4 - Bottom Right */}
              <motion.div
                className="absolute bottom-2 left-56"
                animate={{ y: [10, -5, 10] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
               <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><path fill="#ff542E" d="M9.391 2.32C8.42 1.56 7 2.253 7 3.486V28.41c0 1.538 1.966 2.18 2.874.938l6.225-8.523a2 2 0 0 1 1.615-.82h9.69c1.512 0 2.17-1.912.978-2.844z"/></svg>
                <span className="bg-[#ff542E] rounded relative -right-5 -top-2 px-2 py- text-black">hello</span>

              </motion.div>
            </div>
            <div className="dark:card-wrapper bg-slate-200 w-full max-w-3xl h-auto rounded-lg">
              <div className="card-inner ">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-500/20 pb-2">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <span className="text-xs dark:text-gray-300 light:text-gray-500 ml-2">
                    terminal
                  </span>
                </div>

                <div className="font-mono text-sm space-y-2 dark:text-white">
                  <p>
                    <span className="text-gray-500">$</span> Hello, World!
                  </p>
                  <p>
                    <span className="text-gray-500">$</span> I'm a developer
                    passionate about creating elegant solutions.
                  </p>
                  <p>
                    <span className="text-gray-500">$</span> Let's build
                    something amazing together.
                  </p>
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
