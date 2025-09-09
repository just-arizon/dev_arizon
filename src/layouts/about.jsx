import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Terminal, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const cardData = [
  {
    title: "Frontend",
    description: "Creating responsive and intuitive user interfaces with modern frameworks.",
    icon: <Code className="w-6 h-6" />,
    bgFrom: "from-blue-50",
  },
  {
    title: "Backend",
    description: "Building scalable APIs and server-side applications.",
    icon: <Terminal className="w-6 h-6" />,
    bgFrom: "from-purple-50",
  },
  {
    title: "UI/UX",
    description: "Designing clean, intuitive interfaces focused on user experience.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16L7 11L17 11L12 16Z" fill="currentColor" />
        <path d="M12 8L17 13L7 13L12 8Z" fill="currentColor" />
      </svg>
    ),
    bgFrom: "from-teal-50",
  },
  {
    title: "Architecture",
    description: "Designing scalable and maintainable system architectures.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
        <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    bgFrom: "from-rose-50",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 border-b border-black/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent to-black/20 dark:to-white w-12" />
          <h2 className="font-clash text-2xl font-bold">About</h2>
          <div className="h-px bg-gradient-to-r from-black/20  to-transparent flex-grow" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left section */}
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400">
              I'm a full-stack developer with a passion for building modern web applications. With a background in
              computer science and years of industry experience, I specialize in creating responsive, user-friendly
              interfaces and robust backend systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              My approach combines technical expertise with creative problem-solving, allowing me to deliver solutions
              that are both innovative and practical.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "LOCATION", value: "Anambra State, Nigeria" },
                { label: "EXPERIENCE", value: "3+ Years" },
                { label: "AVAILABILITY", value: "Freelance / Full-time" },
                { label: "REMOTE", value: "Available" },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-sm text-gray-500 mb-2">{item.label}</h3>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right cards section */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
            <span className="absolute right-16 z-30 -top-12 bg-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 24 24"
                className="absolute animate-pulse"
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
            {cardData.map((card, idx) => (
              
              <Card
                key={idx}
                className={`bg-gradient-to-r from-gray-900 to-black border-black/10 shadow-sm dark:bg-[#262626] dark:border-slate-700 dark:border-1 bg-slate-100`}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${card.bgFrom} to-white rounded-lg mb-4 grid dark:text-black place-items-center border border-black/5`}>
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <p className="dark:text-white light:text-black text-sm">{card.description}</p>
                </CardContent>
              </Card>
            ))}
            <span className="absolute left-16 z-30 bottom-5 bg-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 24 24"
                className="absolute animate-pulse"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
