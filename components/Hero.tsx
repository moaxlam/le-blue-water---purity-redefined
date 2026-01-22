import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center bg-blue-600">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-400/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative space-y-8 max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur border border-white/20 text-[10px] font-black uppercase tracking-widest text-white">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          Pure Swiss Standard • UAE Sourced
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.9] text-white">
          STAY HYDRATED.<br />
          <span className="text-blue-200">FEEL THE BLUE.</span>
        </h1>

        {/* ✅ FIXED TEXT (GLASS BACKGROUND) */}
        <div className="max-w-3xl mx-auto bg-black/50 backdrop-blur-md rounded-2xl px-6 py-5">
          <p className="text-white text-lg md:text-xl leading-relaxed font-semibold">
            Ready to experience the premium mineral water of UAE? Join the movement for pure, healthy hydration.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 rounded-md font-black uppercase tracking-tighter text-sm hover:bg-blue-100 transition-all flex items-center justify-center gap-2 group"
          >
            Secure Your Case Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="w-full sm:w-auto px-10 py-4 bg-black/40 backdrop-blur border border-white/30 text-white rounded-md font-black uppercase tracking-tighter text-sm hover:bg-black/60 transition-all">
            See Quality Reports
          </button>
        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-60 text-white">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};
