import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Product Launch',
    description: 'A 3D-enhanced landing page with smooth scroll and dynamic content powered by React.',
    stack: ['React', 'Spline', 'Vite'],
    link: '#',
    repo: '#',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Data-rich dashboard with charts, dark mode, and role-based access.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Portfolio Engine',
    description: 'A blazing fast personal site template optimized for performance and SEO.',
    stack: ['Vite', 'React', 'Netlify'],
    link: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-white/70">A selection of recent work showcasing interactivity, performance, and clean design.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition">Work with me</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 hover:border-white/20 transition overflow-hidden">
              <div className="absolute -top-24 -right-24 h-52 w-52 rounded-full bg-indigo-500/20 blur-3xl" />
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s, i) => (
                  <span key={i} className="rounded-md bg-white/10 px-2 py-1 text-xs text-white/80">{s}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-sm text-white hover:text-white/90 transition">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white transition">
                  <Github size={16} /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
