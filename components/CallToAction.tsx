import React from 'react';
import { PhoneCall, ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onOrderClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOrderClick }) => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-blue-600">
      
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        
        {/* Headline */}
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-white uppercase">
          STAY HYDRATED.
          <br />
          <span className="text-blue-200">FEEL THE BLUE.</span>
        </h2>

        {/* ✅ FIXED TEXT (VISIBLE) */}
        <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
            Ready to experience the premium mineral water of UAE? Join the movement for pure, healthy hydration.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center space-y-8">
          <a
            href="tel:+97142541878"
            className="flex items-center gap-4 text-4xl md:text-7xl font-black tracking-tighter text-white hover:text-blue-200 transition-all transform hover:scale-105"
          >
            <PhoneCall size={48} className="md:size-16" />
            <span>+971 4 254 1878</span>
          </a>

          <button
            onClick={onOrderClick}
            className="px-14 py-6 bg-white text-blue-600 rounded-xl font-black uppercase tracking-tighter text-xl hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-4"
          >
            Secure Your Case Now
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
