import React from 'react';
import Profile from './profile';
import Swiper from './swiper'
import Skillset from './skillset'
import Experience from './experience';
import Project from './project';
import Footer from './footer';
function Home() {
  const experience = [
    {
      id: 1,
      title: 'Build Generation',
      date: 'October 2023 - Present',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nesciunt reprehenderit voluptatibus culpa deserunt laudantium nulla ea alias blanditiis quos nihil aperiam, similique animi soluta fugit vel harum perspiciatis assumenda minima quam aliquid a eum possimus sit. Facilis, vero fuga incidunt voluptatem modi enim error eos mollitia ullam, odio quae?'
    },
    {
      id: 2,
      title: 'Summer of Bitcoin',
      date: 'October 2023 - June 2024',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nesciunt reprehenderit voluptatibus culpa deserunt laudantium nulla ea alias blanditiis quos nihil aperiam, similique animi soluta fugit vel harum perspiciatis assumenda minima quam aliquid a eum possimus sit. Facilis, vero fuga incidunt voluptatem modi enim error eos mollitia ullam, odio quae?'
    },
    {
      id: 3,
      title: 'Outreachy Internship',
      date: 'March 2024 - August 2024',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nesciunt reprehenderit voluptatibus culpa deserunt laudantium nulla ea alias blanditiis quos nihil aperiam, similique animi soluta fugit vel harum perspiciatis assumenda minima quam aliquid a eum possimus sit. Facilis, vero fuga incidunt voluptatem modi enim error eos mollitia ullam, odio quae?'
    },

  ]
  const projects = [
    {
      id: 1,
      title: 'Build Generation',
      date: 'October 2023 - Present',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nesciunt reprehenderit voluptatibus culpa deserunt laudantium nulla ea alias blanditiis quos nihil aperiam, similique animi soluta fugit vel harum perspiciatis assumenda minima quam aliquid a eum possimus sit. Facilis, vero fuga incidunt voluptatem modi enim error eos mollitia ullam, odio quae?'
    },
    {
      id: 2,
      title: 'Summer of Bitcoin',
      date: 'October 2023 - June 2024',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nesciunt reprehenderit voluptatibus culpa deserunt laudantium nulla ea alias blanditiis quos nihil aperiam, similique animi soluta fugit vel harum perspiciatis assumenda minima quam aliquid a eum possimus sit. Facilis, vero fuga incidunt voluptatem modi enim error eos mollitia ullam, odio quae?'
    },
    {
      id: 3,
      title: 'Outreachy Internship',
      date: 'March 2024 - August 2024',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nesciunt reprehenderit voluptatibus culpa deserunt laudantium nulla ea alias blanditiis quos nihil aperiam, similique animi soluta fugit vel harum perspiciatis assumenda minima quam aliquid a eum possimus sit. Facilis, vero fuga incidunt voluptatem modi enim error eos mollitia ullam, odio quae?'
    },

  ]
  return (
    <div id='home'>
       <Profile />
       <Swiper />
     <Skillset />
     <Experience experiences={experience}/>
     <Project projects={projects}/>
     <Footer />

    </div>
  );
}

export default Home;
