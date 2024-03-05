import React from 'react';
import Profile from './profile';
import Swiper from './swiper'
import Skillset from './skillset'
import Experience from './experience';
import Project from './project';
import Footer from './footer';
function Home() {
  return (
    <div id='home'>
       <Profile />
       <Swiper />
     <Skillset />
     <Experience />
     <Project />
     <Footer />

    </div>
  );
}

export default Home;
