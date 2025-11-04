import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80" />
      <div className="pointer-events-none absolute -inset-x-20 -top-40 h-80 blur-3xl opacity-40" style={{ background: 'radial-gradient(600px 200px at 50% 50%, rgba(99,102,241,0.7), transparent 60%)' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles size={14} /> Available for freelance work
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Building delightful web experiences that feel alive
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/80">
            I’m a web developer crafting modern, interactive websites and apps. I blend clean code, performance, and playful 3D to bring products to life.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-4 py-2 font-medium hover:bg-white/90 transition">
              <Code size={18} /> View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">
              Get in touch <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
