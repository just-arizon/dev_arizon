import React, { useState, useEffect } from "react";
import {
  Github,
  Code2,
  Braces,
  Palette,
  Sparkles,
  Server,
  Route,
  Database,
  GitBranch,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";


const ROLES = ["Frontend Engineer", "AI Explorer", "Software Engineer", "React Specialist"];

const STATS = [
  { value: "4", unit: "yrs", label: "Shipping production web apps" },
  { value: "10", unit: "+", label: "Projects delivered end to end" },
  { value: "∞", unit: "", label: "Still building" },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const reduceMotion = useReducedMotion();

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

  /* ---- cursor-driven 3D tilt ---- */
  const px = useMotionValue(0); // -0.5 .. 0.5
  const py = useMotionValue(0);
  const spring = { stiffness: 120, damping: 18, mass: 0.6 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-18, 18]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [14, -14]), spring);
  const shineX = useTransform(px, [-0.5, 0.5], ["0%", "100%"]);

  const handlePointerMove = (e) => {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const resetTilt = () => {
    px.set(0);
    py.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className="min-h-screen flex items-center pt-20 pb-16 px-5 lg:px-20 bg-[#0a0a0a] relative overflow-hidden"
    >
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
            4 years building production web apps. Now leveling up into AI engineering —
            combining solid frontend foundations with machine learning to build smarter products.
          </motion.p>

          {/* Pill tags — grouped by where they sit in the stack */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-10">
            {[
              {
                group: "frontend",
                tags: [
                  { icon: <Code2 className="w-3.5 h-3.5" />, label: "React / Next.js" },
                  { icon: <Braces className="w-3.5 h-3.5" />, label: "TypeScript" },
                  { icon: <Palette className="w-3.5 h-3.5" />, label: "Tailwind" },
                  { icon: <Sparkles className="w-3.5 h-3.5" />, label: "Framer Motion" },
                ],
              },
              {
                group: "backend",
                tags: [
                  { icon: <Server className="w-3.5 h-3.5" />, label: "Node.js" },
                  { icon: <Route className="w-3.5 h-3.5" />, label: "Express" },
                  { icon: <Database className="w-3.5 h-3.5" />, label: "MongoDB" },
                ],
              },
              {
                group: "tools",
                tags: [
                  { icon: <GitBranch className="w-3.5 h-3.5" />, label: "Git" },
                  { icon: <Github className="w-3.5 h-3.5" />, label: "GitHub" },
                ],
              },
            ].map((section, i) => (
              <React.Fragment key={section.group}>
                {i > 0 && <span className="hidden sm:block w-px h-4 bg-white/10" aria-hidden="true" />}
                <div className="flex flex-wrap gap-2">
                  {section.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                    >
                      {tag.icon}
                      {tag.label}
                    </span>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </motion.div>

          {/* CTAs */}
          {/* <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
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
          </motion.div> */}

        </motion.div>

        {/* ── 3D stat slab — desktop only ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: "-50%" }}
          animate={{ opacity: 1, x: 0, y: "-50%" }}
          transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute right-0 top-1/2"
          style={{ perspective: 1200 }}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-56"
          >
            {/* depth layer: glow behind the slab */}
            <div
              className="absolute -inset-6 rounded-[28px] bg-[radial-gradient(circle_at_50%_40%,rgba(192,132,252,0.22),transparent_70%)] blur-2xl pointer-events-none"
              style={{ transform: "translateZ(-80px)" }}
            />

            {/* depth layer: dotted plate */}
            <div
              className="absolute -inset-3 rounded-3xl border border-white/5 bg-[radial-gradient(rgba(192,132,252,0.18)_1px,transparent_1px)] bg-[size:10px_10px] opacity-60 pointer-events-none"
              style={{ transform: "translateZ(-40px)" }}
            />

            {/* main glass slab */}
            <div
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]"
              style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
            >
              {/* specular sheen that tracks the cursor */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.10) 50%, transparent 65%)",
                  backgroundSize: "200% 100%",
                  backgroundPositionX: shineX,
                }}
              />

              <div className="divide-y divide-white/[0.07]">
                {STATS.map((stat) => (
                  <div key={stat.label} className="px-5 py-4">
                    <p className="font-clash text-3xl font-bold text-white leading-none">
                      {stat.value}
                      <span className="text-[#c084fc] text-lg align-top ml-0.5">{stat.unit}</span>
                    </p>
                    <p className="text-gray-500 text-[11px] leading-snug mt-1.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* floating chip in front of the slab */}
            <div
              className="absolute -left-8 bottom-6 rounded-xl border border-[#c084fc]/25 bg-[#12101a]/90 px-3 py-2 backdrop-blur-md shadow-[0_12px_30px_-10px_rgba(192,132,252,0.45)]"
              style={{ transform: "translateZ(60px)" }}
            >
              <span className="flex items-center gap-2 text-[11px] text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc] animate-pulse" />
                Currently learning ML
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;