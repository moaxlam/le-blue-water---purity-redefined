import React from 'react';
import bottle006 from '../bottle006.png';

export const Proof: React.FC = () => {
  return (
    <section className="py-24 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 space-y-8">
          <div className="inline-block">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs px-2 py-1 bg-blue-500/10 rounded">
              Certified Excellence
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
            TRUSTED QUALITY <br />
            <span className="text-blue-600">STANDARDS</span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
            Le Blue Mineral Water is processed in an environment where hygiene and high quality are strictly monitored.
            We are proud to be <span className="text-white font-semibold">HACCP & ESMA certified</span>, following the
            strict guidelines laid by the Health Department of UAE.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-blue-400">100%</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-black leading-none">
                Purity <br />Guaranteed
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-blue-400">LOW</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-black leading-none">
                Sodium <br />Composition
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-blue-400">24/7</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-black leading-none">
                Global <br />Support
              </span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative group">
          <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-500/30 transition-colors" />

          <div className="relative glass rounded-3xl p-1 overflow-hidden border-blue-500/20">
            <img
              src={bottle006}
              alt="Purity Quality"
              className="rounded-[22px] grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105 opacity-80 group-hover:opacity-100"
            />

            <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full text-[10px] font-black tracking-tighter uppercase text-blue-400 border-blue-400/30">
              Laboratory Tested
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
