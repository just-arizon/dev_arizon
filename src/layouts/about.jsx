import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, Globe, ArrowUpRight } from "lucide-react";

const About = () => {
  const facts = [
    { icon: <MapPin className="w-4 h-4" />, label: "Location", value: "Anambra, Nigeria" },
    { icon: <Clock className="w-4 h-4" />, label: "Experience", value: "3+ Years" },
    { icon: <Briefcase className="w-4 h-4" />, label: "Availability", value: "Full-time / Freelance" },
    { icon: <Globe className="w-4 h-4" />, label: "Remote", value: "Fully Available" },
  ];

  const timeline = [
    {
      year: "2024–Now",
      title: "AI Engineering Pivot",
      desc: "Learning Python, ML fundamentals, and how to build AI-powered applications. Building with LLM APIs, exploring model fine-tuning.",
      accent: "#c084fc",
    },
    {
      year: "2022–2024",
      title: "Frontend Engineer",
      desc: "Shipped production apps for NGOs, agri-tech startups, and engineering firms. React, TypeScript, Next.js, TailwindCSS.",
      accent: "#34d399",
    },
    {
      year: "2021",
      title: "First Line of Code",
      desc: "Started with HTML/CSS, fell down the React rabbit hole. Never looked back.",
      accent: "#60a5fa",
    },
  ];

  return (
    <section id="about" className="py-24 px-5 lg:px-20 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-gradient-to-r from-transparent to-white/10 w-12" />
          <h2 className="font-clash text-2xl font-bold text-white tracking-tight">About</h2>
          <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-grow" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a frontend engineer from Nigeria who builds real things for real users. Over 3 years I've shipped apps for NGOs, farming startups, and engineering companies — each one teaching me something the tutorials don't.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Now I'm making a deliberate move toward AI engineering. Not because it's trendy — but because I want to build the kind of software that actually changes how people work. I'm learning Python and ML foundations while continuing to ship with React and Next.js.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The goal: land a role at a company doing serious AI work, where I can grow from strong frontend engineer into a full AI/software engineer.
              </p>
            </div>

            {/* Facts grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/8 hover:border-white/15 transition-colors"
                >
                  <span className="text-[#c084fc] mt-0.5">{f.icon}</span>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{f.label}</p>
                    <p className="text-white text-sm font-medium">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/arinze-calistus/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#c084fc] text-sm font-medium hover:underline mt-2"
            >
              View full profile on LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — timeline */}
          <div className="space-y-2">
            <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-8">My Journey</h3>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-white/8" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative pl-10"
                  >
                    <div
                      className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-[#0a0a0a]"
                      style={{ backgroundColor: item.accent }}
                    />
                    <p className="text-xs font-mono tracking-widest mb-1" style={{ color: item.accent }}>
                      {item.year}
                    </p>
                    <h4 className="font-clash text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
