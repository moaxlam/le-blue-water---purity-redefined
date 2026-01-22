import React from 'react';
import {
  Droplet,
  ShieldCheck,
  Zap,
  Heart,
  FlaskConical,
  Filter,
  Wind
} from 'lucide-react';

import yoyo from '../yoyo.png';

export const FeaturesPage: React.FC = () => {
  const process = [
    { title: 'Quartz Filtration', desc: 'Pre-filtering large particles using natural quartz media.', icon: <Filter size={24} /> },
    { title: 'Carbon Activation', desc: 'Removing chlorine and organic compounds for pure taste.', icon: <Wind size={24} /> },
    { title: 'Micron Filters', desc: 'Removing microscopic particles down to 0.1 microns.', icon: <Filter size={24} /> },
    { title: 'Reverse Osmosis', desc: 'Molecular level purification to ensure absolute clarity.', icon: <Droplet size={24} /> },
    { title: 'Remineralization', desc: 'Adding back essential Swiss-standard minerals.', icon: <Zap size={24} /> },
    { title: 'Ozonation', desc: 'Ensuring zero bacteria and long-lasting freshness.', icon: <FlaskConical size={24} /> },
    { title: 'UV Treatment', desc: 'A final barrier against any biological contaminants.', icon: <ShieldCheck size={24} /> },
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* HEADER */}
        <div className="max-w-3xl space-y-6">
          <span className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs">
            Innovation in Purity
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            7-STAGE <br />
            <span className="text-zinc-500">PRECISION</span>
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed font-medium">
            Our state-of-the-art factory in Dubai utilizes a proprietary 7-stage purification
            cycle that doesn't just clean water—it redefines it.
          </p>
        </div>

        {/* PROCESS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, i) => (
            <div
              key={i}
              className="glass p-8 rounded-3xl border-zinc-900 group hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <span className="block text-[10px] font-black uppercase text-zinc-700 mb-2">
                Stage {i + 1}
              </span>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

          <div className="glass p-8 rounded-3xl border-blue-500 bg-blue-500/[0.05] flex flex-col justify-center items-center text-center space-y-4">
            <Heart className="text-blue-500 animate-pulse" size={40} />
            <h3 className="text-xl font-black uppercase tracking-tight">Pure Heart</h3>
            <p className="text-sm text-zinc-500">
              Every drop is quality checked by our experts.
            </p>
          </div>
        </div>

        {/* ECO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-12 border-t border-zinc-900">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
              ECO-CONSCIOUS <br /> PACKAGING
            </h2>
            <p className="text-zinc-500 leading-relaxed text-lg">
              We believe purity shouldn't cost the planet. Our bottles are crafted from
              100% BPA-free, high-grade recyclable materials.
            </p>
            <div className="flex gap-12">
              <div className="space-y-2">
                <span className="block text-3xl font-black text-blue-500">100%</span>
                <span className="block text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                  BPA Free
                </span>
              </div>
              <div className="space-y-2">
                <span className="block text-3xl font-black text-blue-500">Recycle</span>
                <span className="block text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                  System
                </span>
              </div>
            </div>
          </div>

          {/* IMAGE (YOYO) */}
          <div className="relative glass rounded-[40px] overflow-hidden p-2">
            <img
              src={yoyo}
              alt="Eco Conscious Packaging"
              className="rounded-[32px] grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
