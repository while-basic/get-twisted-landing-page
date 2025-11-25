import React, { useState } from 'react';

const ClubPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
     return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 animate-fade-in-down text-center">
            <div className="bg-white p-12 rounded-[3rem] border-4 border-teal-500 shadow-[8px_8px_0px_0px_#0D9488]">
                <div className="text-8xl mb-6 animate-bounce">🎉</div>
                <h2 className="text-5xl font-display text-purple-900 mb-4">You're In!</h2>
                <p className="text-xl text-gray-600 font-sans font-bold">Welcome to the Twisted Crew.</p>
                <p className="text-gray-500 mt-2">Check your inbox for a sweet surprise.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-teal-600 font-bold underline hover:text-teal-800"
                >
                    Register another friend
                </button>
            </div>
        </div>
     );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12 animate-fade-in-down flex flex-col items-center">
      
      <div className="text-center mb-10">
        <h2 className="text-6xl font-display text-pink-500 uppercase tracking-widest drop-shadow-[2px_2px_0_#000] mb-2">
          Join the Club
        </h2>
        <p className="text-2xl text-purple-900 font-bold font-sans">
            Get exclusive drops, secret menu items, and free stuff!
        </p>
      </div>

      <div className="w-full bg-white border-4 border-purple-900 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_#6A0DAD] relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-bl-full -mr-4 -mt-4 opacity-50 z-0"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-200 rounded-tr-full -ml-4 -mb-4 opacity-50 z-0"></div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="font-display text-xl text-purple-900 ml-2">First Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Twisted" 
                      className="w-full bg-purple-50 border-4 border-purple-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all font-sans font-bold text-gray-700 placeholder-gray-400"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-display text-xl text-purple-900 ml-2">Last Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Sipper" 
                      className="w-full bg-purple-50 border-4 border-purple-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all font-sans font-bold text-gray-700 placeholder-gray-400"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-display text-xl text-purple-900 ml-2">Email Address</label>
                <input 
                  required 
                  type="email" 
                  placeholder="hello@gettwisted.com" 
                  className="w-full bg-purple-50 border-4 border-purple-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all font-sans font-bold text-gray-700 placeholder-gray-400"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-display text-xl text-purple-900 ml-2">Favorite Soda Base?</label>
                <select className="w-full bg-purple-50 border-4 border-purple-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all font-sans font-bold text-gray-700">
                    <option>Dr. Pepper</option>
                    <option>Coke</option>
                    <option>Sprite</option>
                    <option>Root Beer</option>
                    <option>Energy Drink</option>
                    <option>Water (Hydrate!)</option>
                </select>
            </div>

            <div className="pt-4">
                <button type="submit" className="w-full bg-purple-600 text-white font-display text-3xl py-4 rounded-2xl shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-purple-700 transition-all border-4 border-black">
                    Join the Crew 🚀
                </button>
                <p className="text-center mt-4 text-xs text-gray-500 font-sans">
                    We promise not to spam you. Only delicious updates.
                </p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ClubPage;