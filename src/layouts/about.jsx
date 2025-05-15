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

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left section */}
          <div className="space-y-6">
            <p className="text-gray-600">
              I'm a full-stack developer with a passion for building modern web applications. With a background in
              computer science and years of industry experience, I specialize in creating responsive, user-friendly
              interfaces and robust backend systems.
            </p>
            <p className="text-gray-600">
              My approach combines technical expertise with creative problem-solving, allowing me to deliver solutions
              that are both innovative and practical.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "LOCATION", value: "San Francisco, CA" },
                { label: "EXPERIENCE", value: "5+ Years" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cardData.map((card, idx) => (
              <Card
                key={idx}
                className={`bg-gradient-to-br light:from-white light:to-blue-50/30 border-black/10 shadow-sm dark:bg-[#262626] dark:border-white dark:border-1`}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
