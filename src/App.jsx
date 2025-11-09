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

function App() {

  return (
    <>
     <Navigation />
      <VideoFrame />
       <Hero />
       <AboutCarousel />
        <main className="lg:mx-20">
       <About />
       {/* <Experience /> */}
        <Projects />
        <Tools />
        <Contact />
     </main>
        <Footer />
    </>
  )
}

export default App
