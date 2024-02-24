import React from 'react';
import Profile from './profile';
import Swiper from './swiper'
import Skillset from './skillset'
import Experience from './experience';
function Home() {
  return (
    <div>
       <Profile />
       <Swiper />
     <Skillset />
     <Experience />

    </div>
  );
}

export default Home;
