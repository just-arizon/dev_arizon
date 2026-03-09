import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, ArrowRight, Cpu, Code2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ROLES = ["Frontend Engineer", "AI Explorer", "Software Engineer", "React Specialist"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-5 lg:px-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(192,132,252,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(192,132,252,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c084fc]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities — Frontend & AI Engineering roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <p className="text-gray-500 text-sm font-mono mb-2 tracking-widest uppercase">
              Hello, I'm
            </p>
            <h1 className="font-clash text-6xl md:text-8xl font-bold text-white leading-none tracking-tight mb-4">
              Arinze<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-violet-400">
                Chinweuba
              </span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div variants={itemVariants} className="mb-6 h-10 flex items-center">
            <span className="font-clash text-xl md:text-2xl text-gray-300">
              {displayed}
              <span className="inline-block w-0.5 h-6 bg-[#c084fc] ml-0.5 animate-pulse" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-xl leading-relaxed mb-8">
            3+ years building production web apps. Now leveling up into AI engineering —
            combining solid frontend foundations with machine learning to build smarter products.
          </motion.p>

          {/* Pill tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
            {[
              { icon: <Code2 className="w-3.5 h-3.5" />, label: "React / Next.js" },
              { icon: <Cpu className="w-3.5 h-3.5" />, label: "Python / ML" },
              { icon: <Zap className="w-3.5 h-3.5" />, label: "AI-Powered Apps" },
            ].map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
              >
                {tag.icon}
                {tag.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <HashLink
              smooth
              to="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c084fc] text-black font-semibold text-sm hover:bg-violet-400 transition-all duration-200 group"
            >
              See My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 text-white text-sm font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-200"
            >
              Get In Touch
            </HashLink>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex gap-5">
            {[
              { href: "https://github.com/just-arizon", icon: <Github className="w-5 h-5" />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/arinze-calistus/", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
              { href: "https://x.com/just_Arizon", icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
              {
                href: "https://www.youtube.com/@dev_arizon",
                label: "YouTube",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <Link
                key={social.label}
                to={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#c084fc] transition-colors duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating stats — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4"
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "10+", label: "Projects Shipped" },
            { value: "∞", label: "Things to Build" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/3 border border-white/8 rounded-xl p-4 w-40 backdrop-blur-sm hover:border-[#c084fc]/30 transition-colors"
            >
              <p className="font-clash text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
