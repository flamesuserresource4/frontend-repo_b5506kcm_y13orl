import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
