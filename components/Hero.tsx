import React from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-start pt-24 pb-12 px-4 text-center overflow-hidden bg-gradient-to-b from-[#EBD9FC] to-white">
      {/* Decorative Blobs */}
      <div className="blob bg-purple-300 w-96 h-96 rounded-full top-0 left-0 opacity-60 mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="blob bg-teal-200 w-96 h-96 rounded-full bottom-0 right-0 opacity-60 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="blob bg-pink-200 w-80 h-80 rounded-full top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
        
        {/* Animated Badge */}
        <div className="relative group cursor-pointer mb-8 transform hover:scale-105 transition-all duration-500">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-[#590059] rounded-full flex items-center justify-center border-[8px] border-[#8A2BE2] shadow-[0px_20px_50px_rgba(138,43,226,0.5)] relative z-10 transition-transform duration-500 group-hover:rotate-3 overflow-hidden">
            
            {/* Spinning rays background effect */}
            <div className="absolute inset-0 bg-[repeating-conic-gradient(from_0deg,#6A0DAD_0deg_20deg,#590059_20deg_40deg)] opacity-20 animate-[spin_20s_linear_infinite]"></div>

            <div className="flex flex-col items-center justify-center text-white z-20 relative">
                <h2 className="text-4xl md:text-6xl font-display uppercase tracking-widest text-center transform -translate-y-4 drop-shadow-[4px_4px_0_#000]">
                Get<br/>Twisted
                </h2>
                
                {/* Center Graphic */}
                <div className="my-2 relative w-20 h-28 md:w-28 md:h-36 transform group-hover:scale-110 transition-transform duration-300">
                    {/* Cup */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-20 bg-gradient-to-b from-purple-400/80 to-purple-600/80 rounded-b-lg border-2 border-white/80 backdrop-blur-md">
                        {/* Bubbles in cup */}
                        <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/50 rounded-full animate-ping"></div>
                        <div className="absolute bottom-6 right-3 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse delay-75"></div>
                    </div>
                    {/* Lid */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-18 h-3 bg-white/90 rounded-sm border border-gray-300 shadow-sm"></div>
                    {/* Straw */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2 h-24 bg-[repeating-linear-gradient(45deg,#fff,#fff_5px,#d8b4fe_5px,#d8b4fe_10px)] rotate-12 origin-bottom border border-gray-300/50"></div>
                    {/* Pretzel Ring */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-10 border-[5px] border-[#A0522D] rounded-full transform rotate-[-15deg] shadow-lg z-30 bg-transparent group-hover:rotate-[-5deg] transition-all"></div>
                </div>

                <div className="mt-3 bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm border border-white/20">
                    <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-purple-100">
                    Pretzels &amp; Twisted Sodas
                    </div>
                </div>
            </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 text-5xl animate-bounce delay-100 drop-shadow-md">🥤</div>
            <div className="absolute bottom-6 -left-10 text-5xl animate-bounce delay-700 drop-shadow-md">🥨</div>
        </div>

        {/* Main Text & CTA */}
        <h1 className="text-6xl md:text-8xl font-display font-black mb-6 leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 drop-shadow-sm">
            COMING SOON!!!
        </h1>

        <p className="mb-10 text-2xl md:text-3xl text-purple-900 font-sans max-w-3xl font-bold leading-relaxed">
            Twist up your day with <span className="bg-purple-200 px-2 rounded-lg transform -rotate-2 inline-block text-purple-800">bold flavors</span>, 
            <span className="bg-teal-100 px-2 rounded-lg transform rotate-2 inline-block text-teal-700 mx-2">cool colors</span>, 
            and a <span className="text-pink-500 underline decoration-wavy decoration-2">whole lotta attitude</span>.
        </p>

        <button 
          onClick={() => onNavigate('menu')}
          className="group relative inline-flex items-center justify-center px-12 py-4 text-2xl font-display font-bold text-white transition-all duration-200 bg-teal-500 border-4 border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] active:shadow-none active:translate-x-[8px] active:translate-y-[8px]"
        >
            <span className="mr-2">Check the Menu</span>
            <span className="group-hover:rotate-12 transition-transform">👇</span>
        </button>

      </div>
    </section>
  );
};

export default Hero;