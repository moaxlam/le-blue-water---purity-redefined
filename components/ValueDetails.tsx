import React from 'react';
import { ShieldCheck, Zap, Heart, ExternalLink } from 'lucide-react';

interface ValueDetailsProps {
  onLearnMore: () => void;
}

const values = [
  {
    icon: <ShieldCheck className="text-blue-400" size={32} />,
    title: "Triple Filtered Purity",
    description: "Our water undergoes a rigorous 7-stage purification process ensuring zero impurities while maintaining essential minerals."
  },
  {
    icon: <Zap className="text-blue-400" size={32} />,
    title: "Low Sodium Balance",
    description: "Scientifically balanced for optimal hydration. Perfect for health-conscious individuals and those monitoring sodium intake."
  },
  {
    icon: <Heart className="text-blue-400" size={32} />,
    title: "Eco-Conscious Loop",
    description: "100% recyclable bottles and sustainable logistics. We care for the environment as much as we care for your health."
  }
];

export const ValueDetails: React.FC<ValueDetailsProps> = ({ onLearnMore }) => {
  return (
    <section id="features" className="py-24 px-6 border-y border-blue-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="group p-10 rounded-3xl glass hover:bg-blue-600/[0.08] hover:border-blue-500 transition-all duration-500 relative">
              <div className="mb-8 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,112,243,0.5)] transition-all duration-500">
                {val.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors uppercase">{val.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm mb-6">
                {val.description}
              </p>
              <button 
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Deep Dive <ExternalLink size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};