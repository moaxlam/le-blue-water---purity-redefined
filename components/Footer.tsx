import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { Page } from '../types';
import logo from '../logo.png';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="pt-24 pb-12 px-6 border-t border-blue-900/30 bg-[#010409]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* BRAND */}
          <div className="space-y-6">
            <div
              className="cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <img
                src={logo}
                alt="Le Blue Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-medium">
              Premium water purification factory located in Dubai, UAE.
              Dedicated to delivering health and purity to your doorstep.
            </p>

            <div className="flex gap-5 text-zinc-500">
              <Facebook size={20} className="hover:text-blue-500 cursor-pointer transition-colors" />
              <Instagram size={20} className="hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-blue-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-blue-500">
              Products
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <li onClick={() => onNavigate('products')} className="hover:text-white cursor-pointer transition-colors">1.5 LTR Case</li>
              <li onClick={() => onNavigate('products')} className="hover:text-white cursor-pointer transition-colors">500 ML Case</li>
              <li onClick={() => onNavigate('products')} className="hover:text-white cursor-pointer transition-colors">330 ML Case</li>
              <li onClick={() => onNavigate('products')} className="hover:text-white cursor-pointer transition-colors">5 Gallon Bottles</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-blue-500">
              Company
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <li onClick={() => onNavigate('home')} className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li onClick={() => onNavigate('features')} className="hover:text-white cursor-pointer transition-colors">Quality Process</li>
              <li onClick={() => onNavigate('contact')} className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-blue-500">
              Contact
            </h4>
            <ul className="space-y-4 text-xs font-bold tracking-widest text-zinc-500">
              <li className="uppercase">P.O.Box. 69109, Dubai, UAE</li>
              <li className="hover:text-white cursor-pointer transition-colors lowercase">
                info@lebluewater.com
              </li>
              <li className="text-blue-400 font-black text-xl pt-2 tracking-tighter uppercase">
                +971 4 254 1878
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-blue-900/20 flex flex-col md:row justify-between items-center gap-6 text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-black">
          <p>© 2024 Le Blue International Water Purification factory L.L.C.</p>
          <div className="flex gap-8">
            <span className="hover:text-blue-500 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors">Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
