import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import IdleFarmerImg from "../assets/images/idlefarmer.png";
import DoraImg from "../assets/images/dora.png";
import ElneemaImg from "../assets/images/elneema.png";
import KreaImg from "../assets/images/krea.png";
import NabetoImg from "../assets/images/nabeto.png";
import MymindspaceImg from "../assets/images/mymindspace.png";
import MyBuddyImg from "../assets/images/mybuddy.png";

const projects = [
  {
    title: "IdleFarmer",
    category: "Web App",
    description: "Empowers Nigerian farmers with a web platform connecting them to tractors, bulk inputs, and farm support. Solved the access gap between smallholder farmers and modern agri-tools.",
    tech: ["React", "TailwindCSS", "Vite"],
    image: IdleFarmerImg,
    url: "https://www.idlefarmer.africa/",
    github: null,
    featured: true,
  },
  {
    title: "My Mind Space",
    category: "Web App",
    description: "Mental health app for journaling, mood tracking, and mindfulness — built to give users a private, judgment-free space to manage their wellbeing.",
    tech: ["React", "TailwindCSS", "Vite"],
    image: MymindspaceImg,
    url: "https://my-mynd-space.vercel.app/",
    github: null,
    featured: true,
  },
  {
    title: "El-Neema Care Initiative",
    category: "Web App",
    description: "NGO platform fighting period poverty. Educates young girls on menstrual hygiene and connects them to care resources across Nigeria.",
    tech: ["React", "TailwindCSS", "Vite"],
    image: ElneemaImg,
    url: "https://www.elneemacaresinitiative.org/",
    github: null,
    featured: true,
  },
  {
    title: "Nabeto Engineering",
    category: "Web App",
    description: "Corporate website for an EPC (Engineering, Procurement & Construction) services firm — clean, professional, built for credibility.",
    tech: ["React", "Tailwind", "TypeScript"],
    image: NabetoImg,
    url: "https://nabetoengineering.com",
    github: null,
    featured: false,
  },
  {
    title: "Use-Dora",
    category: "Web App",
    description: "Travel platform connecting adventurers with local guides for unique, culture-rich trips.",
    tech: ["React", "TailwindCSS", "Vite"],
    image: DoraImg,
    url: "https://your-portfolio.com",
    github: null,
    featured: false,
  },
  {
    title: "Krea AI Clone",
    category: "Practice",
    description: "Pixel-perfect clone of Krea AI's interface, built to sharpen Next.js + TypeScript skills.",
    tech: ["Next.js", "TypeScript"],
    image: KreaImg,
    url: "https://krea-ai-clone-seven.vercel.app",
    github: null,
    featured: false,
  },
];

const FILTERS = ["All", "Web App", "Practice"];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-5 lg:px-20 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent to-white/10 w-12" />
          <h2 className="font-clash text-2xl font-bold text-white tracking-tight">Projects</h2>
          <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-grow" />
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === f
                  ? "bg-[#c084fc] text-black"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="group bg-white/3 border border-white/8 rounded-2xl overflow-hidden hover:border-[#c084fc]/30 transition-all duration-300 hover:bg-white/5"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video bg-[#111]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-black hover:bg-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  {project.featured && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-[#c084fc]/20 border border-[#c084fc]/40 text-[#c084fc] text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-clash text-white font-bold text-lg leading-tight">{project.title}</h3>
                    <span className="text-gray-500 text-xs border border-white/10 px-2 py-0.5 rounded-full shrink-0 ml-2">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-1 border-t border-white/5">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#c084fc] hover:text-violet-300 font-medium transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Project
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white font-medium transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
