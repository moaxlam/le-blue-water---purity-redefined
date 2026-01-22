import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs">Get in Touch</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">WE ARE <br /><span className="text-zinc-500">LE BLUE</span></h1>
              <p className="text-xl text-zinc-500 leading-relaxed font-medium">
                Our customer experience team is ready to assist you with orders, inquiries, or partnership opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-500">
                  <Phone size={20} />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400">Call Us</h4>
                <p className="text-xl font-black">+971 4 254 1878</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-500">
                  <Mail size={20} />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400">Email Us</h4>
                <p className="text-xl font-black">info@lebluewater.com</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-500">
                  <MapPin size={20} />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400">Our HQ</h4>
                <p className="text-lg font-bold leading-tight">P.O.Box. 69109,<br />Dubai, United Arab Emirates</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-500">
                  <Clock size={20} />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400">Operation Hours</h4>
                <p className="text-lg font-bold">Mon - Sat: 8AM - 8PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
