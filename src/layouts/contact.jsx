import React, { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:calistusarinzechinweuba@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const socials = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "calistusarinzechinweuba@gmail.com", href: "mailto:calistusarinzechinweuba@gmail.com" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "github.com/just-arizon", href: "https://github.com/just-arizon" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "linkedin.com/in/arinze-calistus", href: "https://www.linkedin.com/in/arinze-calistus/" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter / X", value: "@just_Arizon", href: "https://x.com/just_Arizon" },
  ];

  return (
    <section id="contact" className="py-24 px-5 lg:px-20 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent to-white/10 w-12" />
          <h2 className="font-clash text-2xl font-bold text-white tracking-tight">Contact</h2>
          <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-grow" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-clash text-3xl font-bold text-white mb-4 leading-tight">
                Let's build<br />
                <span className="text-[#c084fc]">something together.</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Open to full-time roles in frontend or AI engineering, freelance projects, and conversations with teams doing interesting work. If you're building something ambitious, I want to hear about it.
              </p>
            </div>

            <div className="space-y-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/8 hover:border-[#c084fc]/30 hover:bg-white/5 transition-all duration-200 group"
                >
                  <span className="text-gray-500 group-hover:text-[#c084fc] transition-colors">{s.icon}</span>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">{s.label}</p>
                    <p className="text-gray-200 text-sm font-medium">{s.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
            <h3 className="font-clash text-white font-bold text-xl mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-widest mb-2 block">Name</label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c084fc]/50 focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-widest mb-2 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c084fc]/50 focus:bg-white/8 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-500 text-xs uppercase tracking-widest mb-2 block">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c084fc]/50 focus:bg-white/8 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#c084fc] text-black font-semibold text-sm hover:bg-violet-400 transition-all duration-200"
              >
                {sent ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Opening email client...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
