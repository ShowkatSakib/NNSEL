import React from 'react';
import { Mail, MapPin, Phone, Clock, SendHorizontal } from 'lucide-react';

export default function ContactSection() {
  const accentGold = 'text-[#e0ac2b]';
  const accentGoldBg = 'bg-[#e0ac2b]';
  const mainText = 'text-white';
  const subText = 'text-gray-400';
  const boxBg = 'bg-[#161616]'; // Slightly lighter dark for info boxes
  const inputStyle = 'w-full bg-transparent border-b border-neutral-700 py-4 text-white placeholder-neutral-600 focus:border-[#e0ac2b] outline-none transition';

  const contactInfo = [
    {
      icon: MapPin,
      title: 'LOCATION',
      text: 'House 37, Road 15, Banani, Dhaka 1213'
    },
    {
      icon: Phone,
      title: 'PHONE',
      text: '+880 1805-047288'
    },
    {
      icon: Mail,
      title: 'EMAIL',
      text: 'info@nnsel.com'
    },
    {
      icon: Clock,
      title: 'HOURS',
      text: 'Sat - Thurs: 10AM - 6PM'
    }
  ];

  return (
    <div className="bg-black min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <header className="mb-20 space-y-3">
          <div className="flex items-center gap-3">
            <p className={`text-sm font-semibold uppercase tracking-widest ${accentGold}`}>
              (06) —— CONTACT
            </p>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white leading-tight">
            Let's Build <br />
            <span className={accentGold}>Together</span>
          </h1>
          <p className={`${subText} max-w-xl text-base`}>
            Ready to start your journey to a dream home? We're here to make it happen.
          </p>
        </header>

        {/* CONTACT FORM */}
        <form className="mb-16 space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className={inputStyle}
          />
          <input
            type="email"
            placeholder="Email Address"
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="Subject"
            className={inputStyle}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className={`${inputStyle} resize-none`}
          ></textarea>

          <div className="pt-6">
            <button
              type="submit"
              className={`w-full ${accentGoldBg} text-black font-bold uppercase py-4 flex items-center justify-center gap-2 hover:brightness-105 transition-all duration-300`}
            >
              SEND MESSAGE
              <SendHorizontal size={18} />
            </button>
          </div>
        </form>

        {/* INFO BOXES GRID */}
        {/* On mobile: 1 column. On desktop: 2x2 grid for usability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div key={idx} className={`${boxBg} p-8 border border-neutral-800`}>
                <div className="flex items-start gap-4">
                  <Icon className={`${accentGold} mt-1`} size={24} />
                  <div>
                    <p className={`text-xs uppercase tracking-widest text-neutral-500 font-medium mb-1`}>
                      {info.title}
                    </p>
                    <p className="text-white text-base font-light">
                      {info.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PREFER A CALL BANNER */}
        <div className={`${boxBg} p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-neutral-800`}>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Prefer a Call?</h3>
            <p className={`${subText}`}>Schedule a consultation call</p>
          </div>
          <button className={`inline-flex items-center gap-3 ${accentGoldBg} text-black font-bold px-8 py-4 transition hover:brightness-105`}>
            <Phone size={18} />
            Call Now
          </button>
        </div>

      </div>
    </div>
  );
}