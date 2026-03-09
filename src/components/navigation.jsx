import React, { useState, useEffect } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/images/pro.jpg";
import resumePDF from "../assets/resume.pdf";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`flex border-b border-white/10 py-4 lg:px-20 px-5 fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-[#0a0a0a]/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <HashLink smooth to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#c084fc]/40 group-hover:ring-[#c084fc]/80 transition-all duration-300">
                <img src={Logo} alt="Arinze" className="w-full h-full object-cover" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0a0a0a]" />
            </div>
            <span className="font-clash text-white font-bold text-lg tracking-tight">
              Arizon<span className="text-[#c084fc]">.</span>
            </span>
          </HashLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <HashLink
                key={link.href}
                smooth
                to={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 tracking-wide font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c084fc] group-hover:w-full transition-all duration-300" />
              </HashLink>
            ))}
            <a
              href={resumePDF}
              download="Arinze_Chinweuba_Resume.pdf"
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-[#c084fc]/40 text-[#c084fc] hover:bg-[#c084fc]/10 hover:border-[#c084fc]/70 transition-all duration-200"
            >
              <FileDown className="w-4 h-4" />
              Resume
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-72 bg-[#0f0f0f] border-l border-white/10 flex flex-col pt-20 px-6 gap-2 shadow-2xl">
            {navLinks.map((link) => (
              <HashLink
                key={link.href}
                smooth
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors font-medium"
              >
                {link.label}
              </HashLink>
            ))}
            <a
              href={resumePDF}
              download="Arinze_Chinweuba_Resume.pdf"
              onClick={() => setMobileOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 text-sm font-medium px-4 py-3 rounded-lg border border-[#c084fc]/40 text-[#c084fc] hover:bg-[#c084fc]/10 transition-all"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
