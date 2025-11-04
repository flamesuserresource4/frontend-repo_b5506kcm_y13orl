import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-white">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-lg" />
          <span className="font-semibold tracking-tight">Dev Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="mailto:hello@example.com" className="hidden lg:inline-flex items-center gap-2 rounded-md px-3 py-2 bg-white/10 hover:bg-white/20 text-white transition">
            <Mail size={18} />
            <span>Get in touch</span>
          </a>
        </nav>

        <div className="flex md:hidden items-center gap-3 text-white/90">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition"><Github size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition"><Linkedin size={20} /></a>
          <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-white transition"><Mail size={20} /></a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
