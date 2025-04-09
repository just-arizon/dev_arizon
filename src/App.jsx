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

function App() {

  return (
    <>
     <Navigation />
     <Hero />
     <About />
     <Experience />
      <Projects />
      <Tools />
      <Contact />
      <Footer />  
    </>
  )
}

export default App
