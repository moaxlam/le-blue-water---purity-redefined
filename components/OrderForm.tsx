
import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

export const OrderForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    deliveryAddress: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
  
    setStatus('loading');
  
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbznrTz_GPfWfjYCWt9JMpKSezNnLKJxuiKNG_pPFul4khxu-19Sflw-6HyyFsPfmsXuJA/exec';
  
    const payload = {
      fullName: formData.fullName.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      emailAddress: formData.emailAddress.trim(),
      deliveryAddress: formData.deliveryAddress.trim(),
    };
  
    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      setTimeout(() => setStatus('success'), 1200);
    } catch (error) {
      console.error('Order submission error:', error);
      setStatus('idle');
      alert(
        'There was a problem submitting your order. Please try again or contact us directly.'
      );
    }
  };
  

  if (status === 'success') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-md w-full glass p-12 rounded-[40px] text-center space-y-6 border-blue-500 animate-in zoom-in-95 duration-500">
           <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto shadow-[0_0_30px_rgba(0,112,243,0.5)]">
             <CheckCircle2 size={40} />
           </div>
           <h2 className="text-3xl font-black tracking-tighter uppercase">Order Received</h2>
           <p className="text-zinc-500 leading-relaxed">
             Thank you for choosing Le Blue. Your hydration is our priority. Our logistics team will contact you within the next 2 hours to confirm your delivery schedule.
           </p>
           <button 
             onClick={() => window.location.reload()}
             className="w-full py-4 bg-white text-black rounded-xl font-black uppercase tracking-tighter hover:bg-zinc-200 transition-all"
           >
             Continue Shopping
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs">Direct Delivery</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight uppercase">SECURE YOUR <br /><span className="text-zinc-500">HYDRATION</span></h1>
          <p className="text-zinc-500 font-medium">Free delivery across all major emirates in the UAE.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-in slide-in-from-bottom-4 duration-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Full Name</label>
              <input 
                required
                name="fullName"
                type="text" 
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Phone Number</label>
              <input 
                required
                name="phoneNumber"
                type="tel" 
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+971 5X XXX XXXX"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-700 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Email Address</label>
            <input 
              required
              name="emailAddress"
              type="email" 
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-700 text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Full Delivery Address</label>
            <textarea 
              required
              name="deliveryAddress"
              rows={4}
              value={formData.deliveryAddress}
              onChange={handleChange}
              placeholder="Building name, Floor, Apartment, Area, City"
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-700 resize-none text-white"
            />
          </div>

          <button 
            disabled={status === 'loading'}
            type="submit"
            className="w-full py-5 bg-blue-600 text-white rounded-xl font-black uppercase tracking-tighter text-lg hover:bg-blue-500 transition-all flex items-center justify-center gap-3 blue-glow disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {status === 'loading' ? (
              <Loader2 className="animate-spin" size={24} />
            ) : (
              <>Place Order <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" /></>
            )}
          </button>
          
          <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest font-black pt-4">
            Payment Method: Cash or Card on Delivery
          </p>
        </form>
      </div>
    </div>
  );
};
