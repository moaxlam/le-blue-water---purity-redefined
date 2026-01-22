import React from 'react';
import { Product } from '../types';
import { ArrowLeft, ShoppingCart, CheckCircle2, Droplet, Wind, Zap } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onOrder: () => void;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onOrder, onBack }) => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 uppercase font-black text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back to products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative glass rounded-[40px] overflow-hidden p-2 group">
             <img 
               src={product.image} 
               alt={product.name}
               className="w-full h-full aspect-square object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-1000"
             />
             <div className="absolute top-10 right-10 flex flex-col gap-4">
               {[Droplet, Wind, Zap].map((Icon, i) => (
                 <div key={i} className="w-10 h-10 glass rounded-full flex items-center justify-center text-blue-400 shadow-xl border-blue-500/20">
                   <Icon size={18} />
                 </div>
               ))}
             </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <span className="px-3 py-1 bg-blue-600/10 text-blue-500 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                {product.sizeLabel}
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight uppercase">{product.name}</h1>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Official Pricing Tiers</h4>
              <div className="grid grid-cols-1 gap-3">
                {product.variants.map((variant, idx) => (
                  <div key={idx} className="glass p-5 rounded-2xl border-zinc-900 flex justify-between items-center group hover:border-blue-500 transition-all duration-300">
                    <span className="text-sm font-black text-zinc-300 uppercase tracking-tight">{variant.label}</span>
                    <span className="text-xl font-black text-blue-500 tracking-tighter">{variant.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-zinc-500 text-lg leading-relaxed font-medium">
              {product.description}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="glass p-6 rounded-2xl border-zinc-900">
                  <span className="block text-[10px] uppercase tracking-widest text-zinc-600 font-black mb-1">{key}</span>
                  <span className="text-xl font-bold text-blue-400">{value}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={onOrder}
              className="w-full py-5 bg-blue-600 text-white rounded-xl font-black uppercase tracking-tighter text-lg hover:bg-blue-500 transition-all flex items-center justify-center gap-3 blue-glow"
            >
              <ShoppingCart size={22} /> Configure Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};