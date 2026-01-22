import React from 'react';
import { Page } from '../types';
import logo from '../logo.png';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Features', page: 'features' },
    { label: 'Products', page: 'products' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <img
            src={logo}
            alt="Le Blue Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`transition-colors uppercase tracking-widest text-[10px] font-bold ${
                currentPage === item.page
                  ? 'text-blue-400'
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => onNavigate('order')}
          className="bg-white text-black px-6 py-2 rounded-md text-xs font-black uppercase tracking-tighter hover:bg-blue-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          Order Now
        </button>
      </div>
    </header>
  );
};
