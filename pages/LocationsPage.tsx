import React from 'react';

const LocationsPage: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 animate-fade-in-down flex flex-col items-center">
      
      <div className="text-center mb-12">
        <h2 className="text-6xl md:text-7xl font-display text-teal-600 uppercase tracking-widest drop-shadow-[4px_4px_0_#000] mb-4 transform rotate-1">
          Where to Find Us
        </h2>
        <p className="text-2xl text-purple-900 font-bold font-sans">
            El Paso, We're Coming for You! 🌵
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         {/* Location Card */}
         <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(236,72,153,1)] transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-400 p-4 rounded-full border-4 border-white shadow-md">
                    <span className="text-4xl">⛏️</span>
                </div>
                <div>
                    <h3 className="text-3xl font-display text-purple-900">UTEP / Mesa St.</h3>
                    <span className="bg-teal-100 text-teal-800 text-sm font-bold px-3 py-1 rounded-full uppercase">Grand Opening Soon</span>
                </div>
            </div>
            
            <div className="space-y-4 font-sans text-lg text-gray-700 font-medium">
                <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <p>2024 N Mesa St,<br/>El Paso, TX 79902</p>
                </div>
                <div className="flex items-start gap-3">
                    <span className="text-2xl">⏰</span>
                    <div>
                        <p><span className="font-bold text-purple-800">Mon - Thu:</span> 7am - 10pm</p>
                        <p><span className="font-bold text-purple-800">Fri - Sat:</span> 7am - 12am</p>
                        <p><span className="font-bold text-purple-800">Sun:</span> 8am - 10pm</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <p>(915) 555-0123</p>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300">
                <p className="text-pink-500 font-display text-xl mb-2">Miner Special:</p>
                <p className="text-gray-600">Show your UTEP ID for 10% off any drink! 🟧🟦</p>
            </div>
         </div>

         {/* Visual / Map Placeholder */}
         <div className="relative h-full min-h-[400px] w-full bg-teal-100 rounded-3xl border-4 border-purple-900 overflow-hidden shadow-[8px_8px_0px_0px_#000] flex items-center justify-center group">
             {/* Abstract Map Background */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6A0DAD_2px,transparent_2px)] [background-size:16px_16px]"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl border-4 border-orange-400 transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                    <div className="text-6xl mb-4 animate-bounce">📍</div>
                    <h4 className="text-2xl font-display text-purple-900">Located in the Heart<br/>of Miner Country</h4>
                    <p className="text-sm font-sans font-bold text-gray-500 mt-2">(Map Loading...)</p>
                 </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute top-4 right-4 text-4xl animate-pulse">☀️</div>
             <div className="absolute bottom-4 left-4 text-4xl">🌵</div>
         </div>
      </div>

    </div>
  );
};

export default LocationsPage;