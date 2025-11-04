import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let’s build something great</h2>
          <p className="mt-2 text-white/70">Whether you have a project in mind or just want to say hi, my inbox is open.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/80">Name</label>
                <input type="text" required className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm text-white/80">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/80">Message</label>
              <textarea rows={5} required className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-4 py-2 font-medium hover:bg-white/90 transition">
                Send message
              </button>
              {status && <span className="text-sm text-emerald-300">{status}</span>}
            </div>
          </form>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="font-medium">Connect</h3>
            <div className="mt-4 space-y-3">
              <a href="mailto:hello@example.com" className="flex items-center gap-3 text-white/80 hover:text-white transition">
                <Mail size={18} /> hello@example.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition">
                <Github size={18} /> GitHub
              </a>
            </div>
            <div className="mt-8 text-sm text-white/60">
              Prefer email? I usually reply within 24–48 hours.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
