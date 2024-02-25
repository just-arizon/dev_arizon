import React from 'react';
import Profile from './profile';
import Swiper from './swiper'
import Skillset from './skillset'
import Experience from './experience';
import Project from './project';
function Home() {
  return (
    <div>
       <Profile />
       <Swiper />
     <Skillset />
     <Experience />
     <Project />

    </div>
  );
}

export default Home;
