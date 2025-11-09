import * as React from "react";
import './App.css'
import Navigation from "./components/navigation";
import Hero from "./layouts/hero";
import About from "./layouts/about";
import Experience from "./layouts/experience";
import Projects from "./layouts/project";
import Contact from "./layouts/contact"
import Tools from "./layouts/tools"
import Footer from "./layouts/footer"
import VideoFrame from "./components/videoframe";
import AboutCarousel from "./components/about-carousel";
import ProjectCarousel from "./components/project-carousel";
import SkillCarousel from "./components/skills-carousel";
import HomeCarousel from "./components/home-carousel";

function App() {

  return (
    <>
     <Navigation />
      {/* <VideoFrame /> */}
      <HomeCarousel />
       <Hero />
       <AboutCarousel />
       <About />
       {/* <Experience /> */}
       <ProjectCarousel />
        <Projects />
        <SkillCarousel />
        <Tools />
        <Contact />
        <Footer />
    </>
  )
}

export default App
