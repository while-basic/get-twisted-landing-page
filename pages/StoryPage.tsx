import React from 'react';

const StoryPage: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 animate-fade-in-down">
      
      <div className="relative bg-white border-4 border-purple-900 rounded-[3rem] p-8 md:p-16 shadow-[16px_16px_0px_0px_#F9A8D4]">
        
        {/* Header */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-teal-400 border-4 border-black px-8 py-4 rounded-2xl shadow-[4px_4px_0px_0px_#000] rotate-2">
            <h1 className="text-4xl md:text-5xl font-display text-white uppercase tracking-wider">Our Story</h1>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 space-y-6 text-lg md:text-xl font-medium text-gray-700 font-sans leading-relaxed">
                <p>
                    <span className="text-4xl font-display text-purple-600 float-left mr-2 mt-[-10px]">I</span>t all started with a craving. A craving for something <b>more</b> than just a regular soda. We wanted flavor that punches you in the tastebuds and energy that keeps the vibes high.
                </p>
                <p>
                    Born under the hot El Paso sun, <span className="text-purple-700 font-bold">Get Twisted</span> is the collision of two worlds: the refreshing pop of dirty sodas and the salty, chewy goodness of gourmet pretzels.
                </p>
                <p>
                    We aren't just a drink shop. We're a <span className="bg-pink-200 px-2 rounded transform -rotate-1 inline-block">mood</span>. Whether you're studying late for finals at UTEP, cruising down Mesa, or just needing a pick-me-up, we are here to twist up your routine.
                </p>
                <div className="bg-purple-50 p-6 rounded-xl border-l-8 border-purple-500 italic text-purple-900">
                    "Life is too short for boring drinks. Add some syrup, throw in some cream, and get it twisted."
                </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-col gap-6">
                <div className="bg-purple-600 h-64 w-full rounded-2xl border-4 border-black flex items-center justify-center relative overflow-hidden group shadow-lg">
                    <div className="absolute inset-0 bg-stripes-white-purple opacity-20"></div>
                    <span className="text-8xl transform group-hover:scale-125 transition-transform duration-500">🥨</span>
                </div>
                <div className="bg-pink-500 h-64 w-full rounded-2xl border-4 border-black flex items-center justify-center relative overflow-hidden group shadow-lg transform md:translate-x-8">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/30 to-transparent"></div>
                    <span className="text-8xl transform group-hover:rotate-12 transition-transform duration-500">🥤</span>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default StoryPage;