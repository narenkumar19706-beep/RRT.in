import React from 'react';
import { ArrowRight, AlertTriangle, ShieldCheck, Heart, Users, MapPin, Activity, Smartphone, Phone } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      
      {/* 1. Hero Section */}
      <section className="pt-20 pb-20 px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          {/* Tagline promoted to top */}
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-black mb-8">
            Where empathy meets action
          </p>

          {/* Main Title - focused on Value Prop instead of App Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-black">
            Built for animal welfare workers, <br className="hidden md:block" />
            <span className="text-gray-400">volunteers & feeders.</span>
          </h1>
        </div>

        <div className="space-y-6 max-w-2xl">
          <p className="text-xl md:text-2xl font-medium text-gray-800">
            Find help, and reach out when in need.
          </p>
          
          <div className="pt-8">
            <a 
              href="#download" 
              className="inline-flex items-center justify-between gap-6 bg-black text-white px-8 py-4 text-sm font-bold tracking-wider uppercase rounded-sm hover:bg-gray-800 transition-all hover:px-10"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="flex gap-6 pt-8 text-xs font-medium text-gray-400 border-t border-gray-100 mt-12 w-full md:w-auto">
             <div className="flex items-center gap-2">
               <ShieldCheck size={14} /> Secure access
             </div>
             <div className="flex items-center gap-2">
               <Activity size={14} /> Privacy ensured
             </div>
             <div className="flex items-center gap-2">
               <Users size={14} /> Community driven
             </div>
          </div>
        </div>
      </section>

      {/* 2. What RRT Is */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 block">What this platform does</span>
          <p className="text-2xl md:text-3xl leading-relaxed text-gray-800 font-light">
            Rapid Response Team helps animal feeders, rescuers, and volunteers quickly reach nearby community members during animal-related emergencies or distress situations.
          </p>
        </div>
      </section>

      {/* 3. Important Notice (Orange Box) */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 md:p-8 flex items-start gap-4 md:gap-6">
          <div className="text-orange-600 shrink-0 mt-1">
            <AlertTriangle size={32} />
          </div>
          <div>
            <h3 className="text-orange-800 font-bold uppercase tracking-wider text-sm mb-2">Important Notice</h3>
            <p className="text-orange-900 font-medium mb-4 text-lg">
              Rapid Response Team connects you with volunteer community members. <br className="hidden md:block"/>
              It is <span className="underline decoration-orange-400 underline-offset-2">NOT</span> an official emergency service.
            </p>
            <div className="flex items-center gap-2 text-orange-800/80 font-medium text-sm bg-orange-100/50 p-3 rounded self-start inline-flex">
              <Phone size={16} />
              For life-threatening human emergencies, call 112.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who Uses RRT */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Who uses RRT?</h2>
          <p className="text-gray-500">Designed for people helping animals on the ground.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: <div className="text-2xl">🐾</div>, title: "Community animal feeders", desc: "Daily caretakers who know the streets best." },
            { icon: <div className="text-2xl">🐕</div>, title: "Animal welfare volunteers", desc: "Individuals dedicating time to animal aid." },
            { icon: <div className="text-2xl">🚑</div>, title: "Rescue coordinators", desc: "Managing logistics for emergency cases." },
            { icon: <div className="text-2xl">🏥</div>, title: "NGOs & vet networks", desc: "Organizations providing medical support." },
          ].map((item, i) => (
            <div key={i} className="p-6 border border-gray-100 rounded-xl hover:border-black/10 hover:shadow-sm transition-all bg-white">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Common Situations */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Situations</h2>
          
          <div className="space-y-4">
             {/* Card 1 */}
             <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-2 text-indigo-600">
                    <Users size={20} />
                    <h3 className="font-bold text-lg">Feeders facing trouble</h3>
                  </div>
                  <p className="text-sm text-gray-500">Local resistance or unsafe situations while feeding.</p>
                </div>
                <div className="hidden md:block h-12 w-px bg-gray-100"></div>
                <div className="md:w-2/3 pl-0 md:pl-4">
                  <p className="font-medium text-gray-900 flex items-center gap-2">
                    <ArrowRight size={16} className="text-green-500" />
                    Need immediate community presence
                  </p>
                </div>
             </div>

             {/* Card 2 */}
             <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-2 text-red-600">
                    <Activity size={20} />
                    <h3 className="font-bold text-lg">Injured animals</h3>
                  </div>
                  <p className="text-sm text-gray-500">Road accidents or animals in distress found on site.</p>
                </div>
                <div className="hidden md:block h-12 w-px bg-gray-100"></div>
                <div className="md:w-2/3 pl-0 md:pl-4">
                  <p className="font-medium text-gray-900 flex items-center gap-2">
                    <ArrowRight size={16} className="text-green-500" />
                    Need transport or rescue help
                  </p>
                </div>
             </div>

             {/* Card 3 */}
             <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-2 text-blue-600">
                    <MapPin size={20} />
                    <h3 className="font-bold text-lg">Rescue coordination</h3>
                  </div>
                  <p className="text-sm text-gray-500">Locating specific animals in complex areas.</p>
                </div>
                <div className="hidden md:block h-12 w-px bg-gray-100"></div>
                <div className="md:w-2/3 pl-0 md:pl-4">
                  <p className="font-medium text-gray-900 flex items-center gap-2">
                    <ArrowRight size={16} className="text-green-500" />
                    Faster response via shared live location
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. How It Works (SOS Flow) */}
      <section id="how-it-works" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">How it Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 -z-10 transform translate-y-4"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center bg-white">
            <div className="w-24 h-24 rounded-full bg-red-600 text-white flex flex-col items-center justify-center font-bold text-2xl mb-6 shadow-xl shadow-red-200 z-10 relative border-4 border-white">
              SOS
              <span className="text-[10px] font-normal opacity-80 mt-1">Hold 3s</span>
            </div>
            <h3 className="font-bold text-lg mb-2">1. Alert</h3>
            <p className="text-sm text-gray-500">Open the app and hold SOS for 3 seconds.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center bg-white">
            <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center mb-6 shadow-xl shadow-gray-200 z-10 border-4 border-white">
              <MapPin size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">2. Locate</h3>
            <p className="text-sm text-gray-500">Your location is shared with nearby volunteers.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center bg-white">
            <div className="w-24 h-24 rounded-full bg-white border-2 border-black text-black flex items-center justify-center mb-6 shadow-xl shadow-gray-100 z-10">
              <Users size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">3. Respond</h3>
            <p className="text-sm text-gray-500">Help coordinates through the community.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">
            <ShieldCheck size={14} />
            Location access is used only during active alerts
          </span>
        </div>
      </section>

      {/* 7. Safety Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built with responsibility at its core.</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-800 rounded">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location Privacy</h4>
                  <p className="text-gray-400 text-sm">Location is strictly used only for alerts. No continuous tracking.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-800 rounded">
                  <ShieldCheck size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Anti-Misuse</h4>
                  <p className="text-gray-400 text-sm">Alerts are reviewed by admins. Misuse leads to immediate bans.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-800 rounded">
                  <Heart size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">No Data Selling</h4>
                  <p className="text-gray-400 text-sm">We do not sell user data. This is a community-first initiative.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full flex items-center justify-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
             <div className="text-center">
               <ShieldCheck size={64} className="mx-auto mb-6 text-gray-700" />
               <p className="text-lg font-medium text-gray-300">
                 "Our goal is to create a safe space for those who save others."
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* 8. Download Section */}
      <section id="download" className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Get started in seconds</h2>
        <p className="text-xl text-gray-500 mb-12">Join the network of compassion today.</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all w-full sm:w-auto">
            <Smartphone size={24} />
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-70">Download on</div>
              <div className="text-lg font-bold leading-none">App Store</div>
            </div>
          </button>
          
          <button className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all w-full sm:w-auto">
             <div className="w-6 h-6 flex items-center justify-center">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                 <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L3.84,2.15C3.84,2.15 6.05,2.66 6.05,2.66Z" />
               </svg>
             </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-70">Get it on</div>
              <div className="text-lg font-bold leading-none">Google Play</div>
            </div>
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">
          <span>Lightweight</span>
          <span>•</span>
          <span>Free</span>
          <span>•</span>
          <span>Community-first</span>
        </div>
      </section>

    </div>
  );
};

export default HomePage;